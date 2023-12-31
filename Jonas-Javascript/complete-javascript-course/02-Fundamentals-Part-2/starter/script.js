/** Challenge 1 
 * Back to the two gymnastics teams, the Dolphins and the Koalas! 
 * There is a new gymnastics discipline, which works differently.
 * Each team competes 3 times, and then the average of the 3 scores 
 * is calculated (so one average score per team).
 * A team only wins if it has at least double the average score of the 
 * other team. Otherwise, no team wins!
 * todo 1: Create an arrow function calcAverage to calculate the average of 
 * 3 scores. This function should have three parameters and return a 
 * single number (the average score).
 * todo 2: Create two new variables — scoreDolphins and scoreKoalas, 
 * and assign the value returned from the calcAverage function to them 
 * (you will need to call this function, and pass scores as arguments).
 * todo 3: Create a function checkWinner that takes the average score of each
 * team as parameters (avgDolphins and avgKoalas), and then logs the winner 
 * to the console, together with the victory points, according to the 
 * rule above. Example: Koalas win (30 vs. 13) 
 * (use avgDolphins and avgKoalas instead of hard-coded values).
 * todo 4: Use the checkWinner function to determine the winner for 
 * both DATA 1 and DATA 2.
 * todo 5: Ignore draws this time. Instead, log No team wins... 
 * TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49
 * TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(65, 54, 49)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
    }
    else if (avgKoalas >= (avgDolphins * 2)) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
    }
    else {
        return `No team wins`
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas))


/** Challenge 2 
 * Steven wants you to improve his tip calculator, using the same rules 
 * as before — tip 15% of the bill if the bill value is between 50 and 300, 
 * and if the value is different, the tip is 20%.
 * todo 1: Write a function calcTip that takes any bill value as an input 
 * and returns the corresponding tip, calculated based on the rules above 
 * (you can check out the code from the first tip calculator challenge 
 * if you need to). Use the function type you like the most. 
 * Test the function using a bill value of 100.
 * todo 2: And now let's use arrays! So, create an array called bills 
 * containing the test data below.
 * todo 3: Create an array called tips containing the tip value for each bill,
 *  calculated from the function you created before.
 * todo 4: BONUS: Create an array totals containing the total values, 
 * so the bill + tip.
 * TEST DATA 2: 125, 555, and 44.
*/


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])]
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]]
console.log(total)
