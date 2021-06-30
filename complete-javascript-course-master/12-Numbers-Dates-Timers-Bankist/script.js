'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2021-01-15T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
let currentAccount, timer;

const now = new Date();

const dateFormatted = Intl.DateTimeFormat(navigator.language).format(now);
labelDate.textContent = dateFormatted;

/////////////////////////////////////////////////
// Functions

const startSessionTimer = function () {
  const trick = function () {
    const min = Math.trunc(time / 60);
    const sec = Math.trunc(time % 60);

    labelTimer.textContent = `${min}:${sec}`;
    time--;
    if (time === 0) {
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started`;
    }
  };
  let time = 20;
  trick();
  timer = setInterval(trick, 1000);
};

const numberFormatted = function (locale, currency, value) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const movementDateFormat = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);

  const datePassed = Math.round(calcDaysPassed(new Date(), date));

  if (datePassed === 0) return 'Today';
  if (datePassed === 1) return 'Yesterday';
  if (datePassed <= 7) return `${datePassed} days ago`;

  return Intl.DateTimeFormat(locale).format(date);
};

const displayMovement = function (acc, isSorted = false) {
  containerMovements.innerHTML = '';

  const movs = acc.movements.slice();
  isSorted ? movs.sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const movDate = new Date(acc.movementsDates[i]);

    const dateFormatted = movementDateFormat(movDate, acc.locale);

    let type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
          <div class="movements__row">
                <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
                <div class="movements__date">${dateFormatted}</div>
                <div class="movements__value">${numberFormatted(
                  acc.locale,
                  acc.currency,
                  mov
                )}</div>
          </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const updateUI = function () {
  // Calculate balance
  displayBalance(currentAccount);
  //Display Movements
  displayMovement(currentAccount);
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

  labelBalance.textContent = `${numberFormatted(
    acc.locale,
    acc.currency,
    acc.balance
  )}`;
};

const calcBalanceSummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumIn.textContent = `${numberFormatted(
    acc.locale,
    acc.currency,
    incomes
  )}`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((sum, mov) => sum + mov);
  labelSumOut.textContent = `${numberFormatted(
    acc.locale,
    acc.currency,
    outcomes
  )}`;

  const interests = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((sum, int) => sum + int);

  labelSumInterest.textContent = `${numberFormatted(
    acc.locale,
    acc.currency,
    interests
  )}`;
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
    if (timer) clearInterval(timer);
    startSessionTimer();
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
  currentAccount.movementsDates.push(new Date().toISOString());
  receiveAccount.movementsDates.push(new Date().toISOString());
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
    currentAccount.movementsDates.push(new Date().toISOString());
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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Parse
// console.log(Number.parseInt('13px'));
// console.log(Number.parseFloat('10rem'));

// // checking isNaN

// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20'));
// console.log(Number.isNaN(20 / 0));

// // checking isFinite
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20'));
// console.log(Number.isFinite(20 / 0));

// console.log(Math.ceil(3.03));
// console.log(Math.round((5.49).toFixed(2)));
// console.log(Math.round((5.49).toFixed(1)));

// labelBalance.addEventListener('click', () => {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 == 0) row.style.backgroundColor = 'orangered';
//   });
// });

// const date = new Date();
// console.log(date);
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(Date.now());
// console.log(new Date(Date.now()));

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);
// const day1 = calcDaysPassed(new Date(2021, 1, 16), new Date(2021, 1, 10));
// console.log(day1);
// const mils = 1000 * 60 * 60 * 24;
// console.log(mils);
// console.log(day1 / mils);
const ingredients = ['Cheese', 'chicken'];
const pizzaTimer = setTimeout(
  ingredientes =>
    console.log(
      `Here is your pizza 🍕 ingredients: ${ingredientes.join(' and ')}`
    ),
  3000,
  ingredients
);

if (ingredients.includes('Cheese')) clearTimeout(pizzaTimer);

// setInterval

// setInterval(() => {
//   const now = new Date();
//   const options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//   };
//   console.log(Intl.DateTimeFormat(navigator.locale, options).format(now));
// }, 1000);
