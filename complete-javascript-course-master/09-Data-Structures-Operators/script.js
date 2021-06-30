'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(startIndex, mainIndex) {
    console.log([this.starterMenu[startIndex]], this.mainMenu[mainIndex]);
  },
};

// console.log(restaurant.openingHours.mon?.open);

// restaurant.order(0, 2);

// const users = [];
// console.log(users[0]?.name ?? 'User does not exists');

// const keys = Object.keys(openingHours);
// console.log(keys);
// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);

// for (let [day, { open, close }] of entries) {
//   console.log(`Each ${day} we open from ${open} to ${close}`);
// }

const employeePositions = ['waitress', 'Manager', 'Receptionist', 'waitress'];
const positions = [...new Set(employeePositions)];
console.log(positions);

const map = new Map();
map.set(1, 'Test');
map.set(document.querySelector('h1'), 'Headding 1');

console.log(map);

const questionMap = new Map([
  ['question', "What's the best programming language?"],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Very Good Job'],
  [false, 'Try again'],
]);

// console.log(questionMap.get('question'));
// for (const [key, value] of questionMap) {
//   if (typeof key === 'number') console.log(`${key}:${value}`);
// }
// const tried = Number(prompt('The answer'));
// const answer = questionMap.get('correct');
// console.log(questionMap.get(tried === answer));

//String

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('Sorry you have a middle seat');
  else console.log('You are a lucky man!!');
};

// checkMiddleSeat('12B');
// checkMiddleSeat('3C');
// checkMiddleSeat('14E');

const subject = 'Data Structures and Modern Operators';

console.log(subject.startsWith('Da'));
console.log(subject.endsWith('s'));
console.log(subject.includes('and'));

const email = ' jpelegrino@Gmail.com   ';
console.log(email.toLocaleLowerCase().trim());

const capitalizeName = function (name) {
  const names = name.split(' ');

  const fullName = [];
  for (const n of names) {
    fullName.push(n[0].toUpperCase() + n.slice(1));
    console.log(fullName.join(' '));
  }
};
const creditCard = '454546454';
capitalizeName('julio luis pelegrino');
console.log(creditCard.padStart(30, '*'));
console.log('We are ready '.repeat(5));
