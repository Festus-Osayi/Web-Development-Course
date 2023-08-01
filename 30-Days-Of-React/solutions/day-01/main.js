'use strict'

const webTechs = require('./web_tech')
const countries = require('./countries')

/*
Exercise: Level 2

    Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
    First remove all the punctuations and change the string to array and count the number of words in the array

*/

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    const words = text.split(' ')
console.log(words)
console.log(words.length)

/*
-- In the following shopping cart add, remove, edit items
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat') // add Meat at the beginning
shoppingCart.push('Sugar') // add Sugar at the end
shoppingCart.splice(4, 1) // removed 'Honey'
shoppingCart[3] = 'Green Tea' // modify Tea to 'Green Tea'
console.log(shoppingCart)

/* 
In countries array check if 'Ethiopia' 
exists in the array, if it exists print 'ETHIOPIA'.
If it does not exist add to the countries list.
*/
if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA')
}else{
    countries.push('Ethiopia')
}

/* 

In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.If it does not exist add Sass to the array and print the array 

*/

/*
-- ternary operator
*/

webTechs.includes('Sass') ? 
console.log('Sass is a CSS preprocess') : webTechs.push('Sass')
console.log(webTechs) // push Sass to the webTechs array because it doesn't exists

/*
-- Concatenate the following two variables 
-- and store it in a fullStack variable.
*/
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

/*
Exercise: Level 3

    The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

    1.Slice the first ten countries from the countries array

    Find the middle country(ies) in the countries array

    Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

*/


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort() // --> sort the arry

/* 
-- compute maximum number
*/
function findMaxAge(maxAge) {
    let temp = maxAge[0]
    for (let i = 0; i < maxAge.length; i++) {
        if (maxAge[i] > temp) {
            temp = maxAge[i]
            

        } 
    }
    return temp
   
}

console.log(findMaxAge(ages)) // --> 26

/* 
-- compute minimum number
*/

function findMinAge(minAge) {
    let temp = minAge[0]
    for (let i = 0; i < minAge.length; i++) {
        if (minAge[i] < temp) {
            temp = minAge[i]


        }
    }
    return temp

}

console.log(findMinAge(ages)) // --> 19

const fifth = ages.length - 5
const median = (ages[4] + ages[fifth]) / 2
console.log(median) // --> median 24

/*
-- Find the average age(all items divided by number of items)

*/

function findAvg(avgAge){
    let sum = 0;
    /*
     add all items and divide by the number of items.
     number of items (the array length)
    */
    for(let i = 0; i < avgAge.length; i++){
        sum += avgAge[i] / avgAge.length
    }
    return sum
}

console.log(findAvg(ages)) //--> avg age is 22.8
console.log(findMaxAge(ages) - findMinAge(ages)) //--> 7

function differences(a, b){
    return (Math.abs(a - b))
}

console.log(differences(findMinAge(ages), findAvg(ages))) //--> 3.8
console.log(differences(findMaxAge(ages), findAvg(ages))) // 3.19 or 3.2

console.log(countries.slice(0, 10))

const arg1 = Math.floor(countries.length / 2)
const arg2 = countries.length - arg1
console.log(countries.slice(arg1, arg2))

















