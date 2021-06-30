'use strict';

// Function declaration
function describeContry(country, population, capitalCity) {
    const desc = `${country} has ${population} million people and its
        capital city is ${capitalCity}`;
    return desc;
}

const rd = describeContry("Dominican Republic", 10, "Santo Domingo");
const cuba = describeContry("Cuba", 11, "La Habana");
const pr = describeContry("Puerto Rico", 3, "San Juan");

// console.log(rd);
// console.log(cuba);
// console.log(pr);

// Function Expression

const calculateWorldPopulation = function (population) {
    const worldPop = 7900;
    const percentage = population * 100 / worldPop;

    return `This population(${population} million) represents ${percentage}% of world population`;
}

const drPopPercentage = calculateWorldPopulation(10);
const cubaPopPercentage = calculateWorldPopulation(11);
const prPopPercentage = calculateWorldPopulation(3);

// console.log(drPopPercentage);
// console.log(cubaPopPercentage);
// console.log(prPopPercentage);

// Arrow function 

const calculateWorldPopulation3 = population => {
    const worldPop = 7900;
    const percentage = population * 100 / worldPop;

    return percentage;
}

// console.log(calculateWorldPopulation3(1420));
// console.log(calculateWorldPopulation3(33));
// console.log(calculateWorldPopulation3(80));

const describePopulation = (country, population) => {
    const percentage = calculateWorldPopulation3(population);

    return `${country} has ${population} million people, wich it about ${percentage}% of the world`;
}

// console.log(describePopulation('Dominican Republic', 10));
// console.log(describePopulation('China', 1441));

// Arrays

const populations = [13, 1115, 89, 98];
const percentages = [calculateWorldPopulation3(populations[0]),
    calculateWorldPopulation3(populations[1]), calculateWorldPopulation3(populations[2]),
    calculateWorldPopulation3(populations[populations.length - 1])];

console.log(percentages);

const countriesNeighbours = ['Puerto Rico', 'Haiti', 'Cuba'];
countriesNeighbours.push('Utopia');
countriesNeighbours.pop();

if (countriesNeighbours.includes('Germany')) {
    console.log('Probably is not an European Country');
}

countriesNeighbours[countriesNeighbours.indexOf('Cuba')] = 'La habana';

// console.log(countriesNeighbours);


//Object

const myCountry = {
    country: 'Dominican Republic',
    population: 10,
    language: 'Spanish',
    capital: 'Santo Domingo',
    neighbours: ['Cuba', 'Haiti', 'Puerto Rico'],
    describe: function () {
        console.log(`${this.country} has ${this.neighbours.length} neighbours and it
            best is ${this['neighbours'][1]}`);

    },
    checkIsIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};


myCountry.population += 2;
console.log(myCountry);
myCountry['population'] -= 2;
console.log(myCountry);

const me = {
    firstName: 'Julio',
    lastName: 'Luis Pelegrino',
    birthYear: 1980,
    hasLicense: false,
    calcAge: function () {
        this.age = 2020 - this.birthYear;
       
    },
    summary: function () {
        const license = this.hasLicense ? `has lincense's driver` : `doesn't have lincense's driver`;
        const summary = `${this.firstName} is ${this.age} years old and ${license}`;
        return summary;
    }
};

me.calcAge();
// console.log(me.summary());
// myCountry.describe();
// myCountry.checkIsIsland();
// console.log(myCountry.isIsland);

// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);

// }

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(calculateWorldPopulation3(populations[i]));
}

console.log(percentages2);

const canadaNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Noway', 'Sweden', 'Russia']];

console.log(canadaNeighbours);
console.log('Canada Neighbours:');
for (let i = 0; i < canadaNeighbours.length; i++) {    
    for (let j = 0; j < canadaNeighbours[i].length; j++){
        if (canadaNeighbours[i][j].includes('Canada')) continue;
            
        console.log(canadaNeighbours[i][j]);
    }
}