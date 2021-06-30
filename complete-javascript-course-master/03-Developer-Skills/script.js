/*
1-attach current number + the letter c
2-provide a counter for days
*/

const thermometer = function (temps) {
  for (let i = 0; i < temps.length; i++) {
    console.log(`${temps[i]}°C in ${i + 1} days...`);
  }
};

thermometer([12, 5, -5, 0, 4]);
