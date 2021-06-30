'use strict';

const bookings = [];

const createBooking = function (planeNum, passager = 1, price = 199) {
  const booking = {
    planeNum,
    passager,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBooking('AA300');
// createBooking('AA300', 45);
// createBooking('AA300', 200, 300);

const add = function (num1, num2) {
  return Number(num1) + Number(num2);
};

const substract = function (num1, num2) {
  return Number(num1) - Number(num2);
};

const multiply = function (num1, num2) {
  return Number(num1) * Number(num2);
};

const calculate = function (num1, num2, func) {
  console.log(func(num1, num2));
};

// calculate(25, 3, add);
// calculate(25, 3, multiply);
// calculate(25, 3, substract);

const greet = function (message) {
  return function (name) {
    console.log(`${message} ${name}`);
  };
};

const greet2 = message => {
  return function (name) {
    console.log(`${message} ${name}`);
  };
};

// const greating = greet('Hey');
// greating('Julio');
// greet('Hola')('Juan');
// greet2('Hello')('Pater');

// call and apply

const hotel = {
  name: 'Hamaca',
  guesses: [],
  checkIn(fullName, creditCard) {
    console.log(`${fullName} ${creditCard}`);
    this.guesses.push({ name: this.name, fullName, creditCard });
  },
};

const restaurant = {
  name: 'Hamaca',
  guesses: [],
};

hotel.checkIn('Juan Guerrero', 4522154);
console.log(hotel);

const checkIn = hotel.checkIn;

// checkIn('Pedro Martinez', 41111);
checkIn.call(restaurant, 'Pedro Martinez', 1245555);
console.log(restaurant);
checkIn.apply(hotel, ['Maria Gonzalez', 41111]);
const guess = ['Maria Gonzalez', 41111];
checkIn.call(hotel, ...guess);

const ckBind = checkIn.bind(restaurant);
ckBind('Pedro', 111111);

const ckBind2 = checkIn.bind(restaurant, 'Rosa Maria');
ckBind2(33333);

const airplane = { planeCount: 300 };
airplane.addPlane = function () {
  console.log(this);
  this.planeCount++;
};

document
  .querySelector('.buy')
  .addEventListener('click', airplane.addPlane.bind(airplane));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addPresetTax = addTax.bind(null, 0.23);
console.log(addPresetTax(200));

// Challange

const challangeTax = rate => {
  return function (value) {
    return value + value * rate;
  };
};

const challangeTaxVast = challangeTax(0.23);
console.log(challangeTaxVast(200));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

/*
1-Display promt input
2-update answers
3-validate if input make sense
*/

const displayResult = function (type = []) {
  console.log(poll.answers);
};

poll.registerNewAnswer = function (func) {
  console.log(this.question);
  for (const answer of this.options) {
    console.log(answer);
  }
  const input = Number(prompt('What is your favourite programming language?'));
  if (typeof input !== 'number' || input > 3 || input < 0) {
    console.log('this number not make sense');
  } else {
    this.answers[input]++;
    func(this.answers);
  }
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll, displayResult));

const booking = function () {
  let bookCount = 0;
  return function () {
    bookCount++;
    console.log(bookCount);
  };
};

const passengerBoarding = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(
      `From ${n} passengers we will be boarding ${perGroup} passengers each ${wait} seconds`
    );
  }, wait * 1000);

  console.log(`We have ${n} passenger boarding the plane`);
};

// passengerBoarding(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

const transaction = new Transaction(
  'ordenCompra12345678',
  'ZLco9OnqKRE9Lh34Yc4no6Rtj2bE5xH1dhae5CUzteBxlnhzi-x-JTA2r6yS',
  'http://bghm-002.sandbox.us01.dx.commercecloud.salesforce.com//on/demandware.store/Sites-b2c_skberge_peru-Site/default/Checkout-Begin',
  [
    {
      amount: 10000,
      commerce_code: 597055555536,
      buy_order: 'ordenCompraDetalle1234',
    },
    {
      amount: 12000,
      commerce_code: 597055555537,
      buy_order: 'ordenCompraDetalle4321',
    },
  ]
);

console.log(JSON.stringify(transaction));
