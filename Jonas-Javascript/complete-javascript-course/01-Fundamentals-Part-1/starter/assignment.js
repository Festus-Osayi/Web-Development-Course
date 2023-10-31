/**Assignment 1 - Values and Variables
 * Declare variables called 'country', 'continent' and 'population' and
 * assign their values according to your own country (population in millions)
 * Log their values to the console
 */


let country = 'Nigeria';
let continent = 'Africa';
let population = 200_000_000
console.log(country, continent, population)


/**
 * Coding challenge 1
 * Mark and John are trying to compare their BMI (Body Mass Index), which is
 * calculated using the formula:
 * BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
 * todo: Store Mark's and John's mass and height in variables
 * todo: Calculate both their BMIs using the formula (you can even implement both versions)
 * todo: Create a Boolean variable 'markHigherBMI' containing information about whether Mark
 * has a higher BMI than John.
 *** Test Data ***
 * Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
 * Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
 */

const marksWeight = 78;
const marksHeight = 1.69;
const johnWeight = 92
const johnHeight = 1.95
const BMIMark = marksWeight / marksHeight ** 2;
const BMIJohn = johnWeight / johnHeight ** 2
const markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI)

/**
 * Coding challenge 2
 * todo: Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
 * todo: Print a nice output to the console, saying who has the higher BMI. The message
 * todo: is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
 * todo: Use a template literal to include the BMI values in the outputs.
 * todo: Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
 */

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}


/**
 * Coding challenge 4
 * There are two gymnastics teams, Dolphins and Koalas. They compete against each
 * other 3 times. The winner with the highest average score wins a trophy!
 * todo 1: Calculate the average score for each team, using the test data below
 * todo: Calculate the average score for each team, using the test data included below. 
 * todo: The average score for Dolphins should be assigned to the scoreDolphins variable, and 
 * todo: the average score of Koalas should be assigned to the scoreKoalas variable.
 * todo 2: Compare the team's average scores to determine the winner of the competition, 
 * and print to the console: "Dolphins win the trophy" if Dolphins win, or
 * "Koalas win the trophy" if Koalas win, or "Both win the trophy" if their average scores 
 * are equal."
 * todo 3: Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
 * team only wins if it has a higher score than the other team, and the same time a
 * score of at least 100 points. Hint: Use a logical operator to test for minimum score, as
 * well as multiple else-if blocks 😉
 * todo Bonus 2: Minimum score also applies to a draw! So a draw only happens when
 * both teams have the same score and both have a score greater or equal 100 console.log()
 * points. Otherwise, no team wins the trophy
 * TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
 * Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
 * Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 * 
 */

/* Write your code below. Good luck! 🙂 */

const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;

const koalasScore1 = 89;
const koalasScore2 = 91;
const koalasScore3 = 110;

const scoreDolphin = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const scoreKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3

if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
    console.log(`Dolphins win the trophy`)
}
else if (scoreKoalas > scoreDolphin && scoreKoalas >= 100) {
    console.log(`Koalas win the trophy`)
} else if (scoreDolphin == scoreKoalas && scoreDolphin >= 100 && scoreKoalas >= 100) {
    console.log(`There is a tie`)
}else{
    console.log(`No team wins the trophy`)
}

/** switch to if-else */
const day = 'thursday';
if(day === 'monday'){
    console.log(`Plan course structure`);
}
else if(day === 'tuesday'){
    console.log('Prepare theory videos');
}
else if(day === 'wednesday' || day === 'thursday'){
    console.log(`write code examples`);
}
else if(day === 'friday'){
    console.log(`Record videos`);
}else if(day === 'saturday' || day === 'sunday'){
    console.log(`Enjoy the weekend :D`);
}else{
    console.log(`Not a valid day`);
}


/** CHALLENGE #4
 * a very simple tip calculator 
 * Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. 
 * In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
 * If the value is different, the tip is 20%.
 * todo 1: Calculate the tip, depending on the bill value. Create a variable called tip 
 * for this. It's not allowed to use an if...else statement (if it's easier for you, 
 * you can start with an if...else statement, and then try to convert it to a ternary operator).
 * todo 2: Print a string to the console containing the bill value, the tip, and the 
 * final value (bill + tip). Example: The bill was 275, the tip was 41.25, and the total 
 * value 316.25.
 * Note: Use the values of the bill and tip variables to construct this string. 
 * Don't hard-code them 🙂
 * TEST DATA: Test with different bill values: 275, 40, and 430
*/

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`)



