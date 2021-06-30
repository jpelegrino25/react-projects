'use strict';

const calcAverage = (score1, score2, score3) =>   (score1 + score2 + score3) / 3;

const doubleScore = score => score * 2;

const checkWinner = (avg1, avg2) => {
    console.log(avg1,avg2);
    if (avg1 > doubleScore(avg2)) {
        console.log('Team 1 win');
    } else if (avg2 > doubleScore(avg1)) {
        console.log('Team 2 win');
    } else { 
        console.log('Any team win');
    }
}

const team1 = calcAverage(85, 54, 41);
const team2 = calcAverage(23, 34, 27);

checkWinner(team1,team2);