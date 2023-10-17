/**Assignment 1 - Values and Variables
 * Declare variables called 'country', 'continent' and 'population' and
 * assign their values according to your own country (population in millions)
 * Log their values to the console
 */


// let country = 'Nigeria';
// let continent = 'Africa';
// let population = 200_000_000
// console.log(country)
// console.log(continent)
// console.log(population)

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

// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnWeight = 92
// const johnHeight = 1.95
const marksWeight = 95;
const marksHeight = 1.88;
const johnWeight = 85
const johnHeight = 1.76
const marksBmi = marksWeight / marksHeight ** 2;
const johnBmi = johnWeight / johnHeight ** 2
const markHigherBMI = marksBmi > johnBmi
console.log(markHigherBMI)