let markHeigh = 1.88;//1.69;
let markMass = 95;//78;
let johnHeigh = 1.76;//1.95;
let johnMass = 85;//92;

let markBMI = markMass / markHeigh ** 2;
let johnBMI = johnMass / johnHeigh ** 2;

let markHeigherBMI = markBMI > johnBMI;

console.log('Mark\'s BMI is ' + markBMI);
console.log('John\'s BMI is ' + johnBMI);
console.log('Is Mark\'s BMI heigher than John\'s BMI? '+ markHeigherBMI);