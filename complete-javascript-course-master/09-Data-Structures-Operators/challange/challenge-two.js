'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const calcAvg = function (...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
};
// task 1
for (let [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}:${player}`);
}
// Task 2
console.log(calcAvg(...Object.values(game.odds)));

// Task 3
for (const [team, odd] of Object.entries(game.odds)) {
  let teamStr = team === 'x' ? 'Draw' : ' victory ' + game[team];
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Bonus
console.log();
for (let x of game.scored) {
  console.log(x);
}
