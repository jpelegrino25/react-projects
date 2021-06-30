let markHeigh = 1.88;//1.69;
let markMass = 95;//78;
let johnHeigh = 1.76;//1.95;
let johnMass = 85;//92;

let markBMI = markMass / markHeigh ** 2;
let johnBMI = johnMass / johnHeigh ** 2;

let markHeigherBMI = markBMI > johnBMI;

if (markHeigherBMI) {
    console.log(`Mark's BMI(${markBMI}) is heigher than John(${johnBMI})`);
} else { 
    console.log(`John's BMI(${johnBMI}) is heigher than Mark(${markBMI})`);
}