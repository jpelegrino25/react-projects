const totalGame = 3;
const dolphinsAvg = (96 + 108 + 89) / totalGame;
const koalasAvg = (98 + 90 + 110) / totalGame;

console.log(dolphinsAvg,koalasAvg);

if (dolphinsAvg>=100 && (dolphinsAvg > koalasAvg)) {
    console.log(`Dolphing team win the competition with ${dolphinsAvg} of avg`);
} else if (koalasAvg>=100 && (koalasAvg > dolphinsAvg)) {
    console.log(`Koalas team win the competition with ${koalasAvg} of avg`);
} else if(dolphinsAvg>=100 && (dolphinsAvg===koalasAvg)) {
    console.log('There is a draw!!');
} else {
    console.log('No team win the thophy!!');
}