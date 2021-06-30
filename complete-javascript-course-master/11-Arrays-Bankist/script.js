'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
let currentAccount;

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovement = function (movements, isSorted = false) {
  containerMovements.innerHTML = '';

  const movs = movements.slice();
  isSorted ? movs.sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    let type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
          <div class="movements__row">
                <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
                <div class="movements__date"></div>
                <div class="movements__value">${mov}💲</div>
          </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const updateUI = function () {
  // Calculate balance
  displayBalance(currentAccount);
  //Display Movements
  displayMovement(currentAccount.movements);
  //CalculateSumary
  calcBalanceSummary(currentAccount);
};

const login = function (username, pin) {
  const loginInfo = accounts.find(
    acc => acc.username === username && acc.pin === pin
  );

  return loginInfo ? true : false;
};

const createUsernames = function (accs) {
  accs.forEach(account => {
    account.username = account.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(user => user[0])
      .join('');
  });
};

const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, value) => acc + value);

  labelBalance.textContent = `${acc.balance}💲`;
};

const calcBalanceSummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumIn.textContent = `${incomes}💲`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((sum, mov) => sum + mov);
  labelSumOut.textContent = `${Math.abs(outcomes)}💲`;

  const interests = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((sum, int) => sum + int);

  labelSumInterest.textContent = `${interests}💲`;
};
createUsernames(accounts);

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    updateUI();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferTo.blur();

  if (
    amount > 0 &&
    receiveAccount &&
    currentAccount.balance >= amount &&
    currentAccount?.username !== receiveAccount.username
  )
    currentAccount.movements.push(-amount);
  receiveAccount.movements.push(amount);
  updateUI();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  if (currentAccount.username === username && currentAccount.pin === pin) {
    const index = accounts.findIndex(
      acc => acc.username === username && acc.pin === pin
    );

    accounts.splice(index, 1);
    inputCloseUsername.value = inputClosePin.value = '';
    containerApp.style.opacity = 0;
    inputClosePin.blur();
    labelWelcome.innerHTML = 'Log in to get started';
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI();
  }
  inputLoanAmount.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// const deposits = movements.filter(mov => mov > 0);
// const widhdraws = movements.filter(mov => mov < 0);
// console.log(accounts);
// console.log(deposits, widhdraws);

/////////////////////////////////////////////////
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const str = 'hola,';
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(str.split('').slice(0, -1).join(''));

// arr.splice(-2);
// console.log(arr.slice(1));
// const strArr = str.split('');
// strArr.splice(-1);
// console.log(strArr.join(''));

// Reverse
// console.log(arr);
// arr.reverse();
// console.log(arr);
// const displayMovement = function (mov) {
//   if (mov > 0) {
//     console.log(`You deposited RD$${mov}`);
//   } else {
//     console.log(`You withdrew RD$${Math.abs(mov)}`);
//   }
// };

// movements.forEach(displayMovement);

// currencies.forEach(function (value, key) {
//   console.log(`${key}:${value}`);
// });

const kateData = [4, 1, 15, 8, 3];
const juliaData = [3, 5, 2, 12, 7];

// Task 1
// const checkDogs = function (juliaDogs, kateDogs) {
//   const juliaCopy = juliaDogs.slice(1);
//   juliaCopy.splice(-2);

//   const dogAges = juliaCopy.concat(kateDogs);

//   dogAges.forEach(function (age, i) {
//     let dogNumber = i + 1;

//     age > 2
//       ? console.log(`Dog ${dogNumber} is an adult`)
//       : console.log(`Dog ${dogNumber} is a poppy`);
//   });
// };

// checkDogs([4, 1, 15, 8, 3], [3, 5, 2, 12, 7]);
// console.log('******************');
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const movementUSD = movements.map(function (mov) {
//   return mov * 1.1;
// });

// const movementUSD = movements.map(mov => mov * 1.1);
// console.log(movementUSD);

// const movementResult = movements.map((mov, i) =>
//   mov > 0 ? `You deposited RD$${mov}` : `You withdrew RD$${Math.abs(mov)}`
// );

// console.log(movementResult);

// const avg = movements.reduce((acc, curr, i, arr) => {
//   return (acc + curr) / arr.length;
// }, 0);

// const total = movements.reduce((acc, curr) => acc + curr);
// console.log(total / movements.length);
// console.log(movements);
// console.log(avg);

// Challange #2

const dogAges = [...kateData, ...juliaData];

// // Task 1
// const calcAvarageHumanAge = function (dogs) {
//   return dogs.map(age => (age <= 2 ? age * 2 : age + 16 * 4));
// };

// const dogToHumanAges = calcAvarageHumanAge(dogAges);
// console.log(dogAges);
// console.log(dogToHumanAges);

// // Task 2
// const adultDogs = dogToHumanAges.filter(age => age >= 18);
// console.log(adultDogs);

// // Task 3
// const avgDogHumanAge =
//   dogToHumanAges.reduce((acc, curr) => acc + curr) / dogToHumanAges.length;
// console.log(avgDogHumanAge);

// const calcAverageHumanAges = function (dogAges) {
//   const avgDogHumaAge = dogAges
//     .map(age => (age <= 2 ? age * 2 : age + 16 * 4))
//     .filter(age => age >= 18)
//     .reduce((sum, age, i, arr) => sum + age / arr.length, 0);

//   console.log(avgDogHumaAge);
// };

// calcAverageHumanAges(dogAges);
// const prom = [85, 90, 100].reduce(
//   (acc, value, i, arr) => acc + value / arr.length,
//   0
// );
// console.log(prom);

// const account = accounts.find(acc => acc.owner.split(' ')[1] === 'Davis');
// console.log(accounts);
// console.log(account);
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(account4.movements.every(deposit));

// flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// const names = ['Juan', 'Pedro', 'Andres', 'Santiago'];
// console.log(names.sort());

// //Ascending
// console.log(movements.sort((a, b) => a - b));
// //Descending
// console.log(movements.sort((a, b) => b - a));

// let isOpen = false;
// if (!isOpen) {
//   console.log('Is open');
//   isOpen = !isOpen;
// }

// console.log('Is Open?', isOpen);

// const myArr = new Array(7);
// myArr.fill(0);
// console.log(myArr);

// const arr = [12, 14, 53, 78];
// arr.fill(0, 2, 4);
// console.log(arr);
// console.log(labelBalance);
// labelBalance.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log(
//     Array.from(document.querySelectorAll('.movements__value'), mov =>
//       Number(mov.textContent.replace('💲', ''))
//     )
//   );
// });

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Task 1
console.log(dogs);
dogs.forEach(dog => (dog.recomendedFood = dog.weight ** 0.75 * 28));
console.log(dogs);

// Task 2
const sarahDog = dogs.find(dog => dog.owners.some(owner => owner === 'Sarah'));
console.log(sarahDog);

//Task 3
/*
current > (recommended * 0.90) && current < (recommended *
1.10)
*/

const dogEatingTooMuchOwners = dogs
  .filter(dog => dog.curFood > dog.recomendedFood)
  .flatMap(dog => dog.owners);

console.log(dogEatingTooMuchOwners);

const dogEatingTooLittleOwners = dogs
  .filter(dog => dog.curFood < dog.recomendedFood)
  .flatMap(dog => dog.owners);
console.log(dogEatingTooLittleOwners);

//Task 4
console.log(
  dogEatingTooMuchOwners.join(' and ').concat(`'s dogs eat too much`)
);

console.log(
  dogEatingTooLittleOwners.join(' and ').concat(`'s dogs eat too little`)
);

// Task 5
console.log(dogs.some(dog => dog.curFood === dog.recomendedFood));

const okeyAmount = dog =>
  dog.curFood > dog.recomendedFood * 0.9 &&
  dog.curFood < dog.recomendedFood * 1.1;

// Task 6
console.log(dogs.some(okeyAmount));

// Task 7
console.log(dogs.filter(okeyAmount));

// Task 8
const dogsCopy = dogs.slice();
dogsCopy.sort((a, b) => a.recomendedFood - b.recomendedFood);
console.log(dogsCopy);
