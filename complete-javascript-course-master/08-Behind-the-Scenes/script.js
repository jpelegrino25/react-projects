'use strict';

let firstName = 'Jonas';

// expFunc();
// arrowFunces6();

function displayInfo() {
  console.log('Function scope ' + firstName);
  if (true) {
    let firstName = 'Julio';
    console.log('block scope: ' + firstName);
  }
  console.log(this);
}

const expFunc = function () {
  console.log('Expression function');
};

const arrowFunces6 = () => console.log('Arrow function es6');
displayInfo();
