const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 123;


const dolphinsScoreSum = dolphinsScore1 + dolphinsScore2 + dolphinsScore3;
const dolphinsAverage = dolphinsScoreSum / 3;

const koalasScoreSum = koalasScore1 + koalasScore2 + koalasScore3;
const koalasAverage = koalasScoreSum / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`The dolphins average score of ${dolphinsAverage} is greater than koalas average score of ${koalasAverage}`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`Koalas average of ${koalasAverage} is greater than dolphins average of ${dolphinsAverage}`)
} else if (dolphinsAverage === koalasAverage || koalasAverage === dolphinsAverage && dolphinsAverage && koalasAverage >= 100) {
    console.log(`it's a draw because the average ${dolphinsAverage} of dolphins is equal to the average ${koalasAverage} of koalas`)
}
else {
    console.log(`in conclusion, we have no winner...`)
}







