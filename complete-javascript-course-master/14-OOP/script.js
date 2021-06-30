'use strict';

function Person(firstName, yearOfBirth) {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
}

const jhon = new Person('Jhon', 1986);
const mary = new Person('Mary', 1982);

console.log(jhon, mary);

Person.prototype.calcAge = function () {
  return 2021 - this.yearOfBirth;
};

console.log(jhon.calcAge());
Person.prototype.color = 'generic';

mary.color = 'Negro';
console.log(mary.color);
console.log(jhon.color);

console.log(jhon.__proto__);

// Codding Challenge #1

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();

class Employee {
  constructor(fullName, dayOfBirth) {
    this.fullName = fullName;
    this.dayOfBirth = dayOfBirth;
  }

  calcAge() {
    return 2021 - this.dayOfBirth;
  }

  get age() {
    return 2021 - this.dayOfBirth;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('Need to provide the full name');
  }

  get fullName() {
    return this._fullName;
  }

  static greet() {
    console.log('Hey there..');
  }
}

const anna = new Employee('Juan Martinez', 1985);
console.log(anna);
Employee.greet();

// Object.create

const carlos = Object.create(Employee);
console.log(carlos.age);

// Coding Challenge 2

class Vehicle {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    const convertSpeed = speed * 1.6;
    this.speed = convertSpeed;
  }
}

const car1 = new Vehicle('BMW', 12);
car1.speedUS = 120;
console.log(car1);
car1.accelerate();

// Inheritance between classes

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

const tesla = new EV('Tesla', 120, 90);

console.log(tesla);
tesla.accelerate();

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};

tesla.accelerate();

class Account {
  constructor(owner) {
    this.owner = owner;
    this.movements = [];
  }

  deposit(amount) {
    this.movements.push(amount);
    return this;
  }

  withdraw(amount) {
    this.deposit(-amount);
    return this;
  }

  requestLoan(amount) {
    this.deposit(amount);
    console.log('Loan requested');
    return this;
  }

  getMovements() {
    return this.movements;
  }

  getBalance() {
    return this.movements.reduce((acc, amount) => {
      return acc + amount;
    });
  }
}

const fanny = new Account('Fanny');

fanny.deposit(500).deposit(1500).withdraw(600).requestLoan(23000);

console.log(fanny);
console.log(fanny.getBalance());

// EVCl implementation

class EVCl extends Vehicle {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
}

const ev1 = new EVCl('Chevlollet', 190, 90);
ev1.accelerate();
ev1.brake();
console.log(EVCl.prototype);
