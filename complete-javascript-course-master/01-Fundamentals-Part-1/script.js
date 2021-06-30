// Value and variables

const country = 'Dominican Republic';
const continent = 'America';
let population = 10063000;

console.log(country);
console.log(continent);
console.log(population);



// Data types

const isIsland = true;
const language='Spanish';

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

// Basic operators
/*
population++;
let halfCountry = population / 2;
let findlandPopulation = 6000000;
let countryPopulationAvg = 33000000;
let description = `Portugal is in Europe, and its 11 million people speak portuguese`;
console.log("Country Half:: " + halfCountry);
console.log("Population:: " + population);
console.log("Does my country have more people than Findland? " + (population > findlandPopulation));
console.log("Does my country is under the average? " + (population < countryPopulationAvg));
console.log(description);
*/

// Type conversion and cohersion
/*
console.log('9' - '5');
console.log('19' - '13'+'17');
console.log('19' - '13'+17);
console.log('123' < '57');
console.log(5+6+'4'+9-4-2);
*/

// Equality operator

/*
let input = Number(prompt("How many Neighbour does your country have?"));

if (input === 1) {
    console.log('Your country only have 1 border');
} else if (input > 1) {
    console.log('Your country  have more than 1 border');
} else { 
    console.log('No borders');
}
*/

if (!isIsland && language === 'English' && population < 50000000) {
    console.log('You should live in Portugal :)');
} else {
    console.log('Portugal does not meet your critaria ):');
}

switch (language) {
    case 'Chinese':
    case 'Mandarin':
        console.log('MOST number of native speakers');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
    case 'Hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too');
        break;
}

population > 33000000 ? console.log(`${country} is above average`) : console.log(`${country} is below average`);