'use strict';

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const jhon = {
    fullName: 'Jhon Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const markBMI = mark.calcBMI();
const jhonBMI = jhon.calcBMI();

if (markBMI > jhonBMI) { 
    console.log(`${mark.fullName} BMI(${mark.bmi}) is greater than ${jhon.fullName} BMI(${jhon.bmi})`);
} else {
   console.log(`${jhon.fullName} BMI(${jhon.bmi}) is greater than ${mark.fullName} BMI(${mark.bmi})`); 
}