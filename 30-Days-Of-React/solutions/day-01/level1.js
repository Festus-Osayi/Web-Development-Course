/*
-- 💻 Exercise
    Exercise: Level 1
    Declare an empty array;
    Declare an array with more than 5 number of elements
    Find the length of your array
    Get the first item, the middle item and the last item of the array
    Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
    Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    Print the array using console.log()
    Print the number of companies in the array
    Print the first company, middle and last company
    Print out each company
    Change each company name to uppercase one by one and print them out
    Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    Filter out companies which have more than one 'o' without the filter method
    Sort the array using sort() method
    Reverse the array using reverse() method
    Slice out the first 3 companies from the array
    Slice out the last 3 companies from the array
    Slice out the middle IT company or companies from the array
    Remove the first IT company from the array
    Remove the middle IT company or companies from the array
    Remove the last IT company from the array
    Remove all IT companies

*/

// Declaring an empty array
const arr = []

// an array with more than 5 elemenst
const fruits = [
    "Apple",
    "Orange",
    "Mango",
    "Watermelon",
    "Cashew",
    "Grape"
]

// Finding the length of my arrays..
console.log(arr.length) // --> 0 because it's empty
console.log(fruits.length) // --> 6

/*
-- Geting the first item, 
-- the middle item and the 
-- last item of the array
*/

console.log(fruits[0]) // first item --> Apple
console.log(fruits[3]) // middle item --> Watermelon
const lastItem = fruits.length - 1
console.log(fruits[lastItem]) // last item --> Grape

/*
-- Declare an array called mixedDataTypes, 
-- put different data types in the array and 
-- find the length of the array. 
-- The array size should be greater than 5
*/

const mixedDataTypes = [
    "HTML",
    true,
    20,
    { favouriteLanguage: "Javascript" },
    { name: "Festus" },
    "CSS"

]
console.log(mixedDataTypes.length) // length --> 6

/*
    Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    Print the array using console.log()
    Print the number of companies in the array
    Print the first company, middle and last company
    Print out each company
    Change each company name to uppercase one by one and print them out
    Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    Filter out companies which have more than one 'o' without the filter method
    Sort the array using sort() method
    Reverse the array using reverse() method
    Slice out the first 3 companies from the array
    Slice out the last 3 companies from the array
    Slice out the middle IT company or companies from the array
    Remove the first IT company from the array
    Remove the middle IT company or companies from the array
    Remove the last IT company from the array
    Remove all IT companies
*/

const itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
]

console.log(itCompanies) // Print the array using console.log()
console.log(itCompanies.length) // --> 7 companies
/*
 Print the first company, 
 middle and last company
*/
console.log(itCompanies[0]) // --> Facebook
console.log(itCompanies[3]) // --> Apple
const lastCompany = itCompanies.length - 1
console.log(itCompanies[lastCompany]) // --> Amazon

/*
 Change each company name to 
 uppercase one by one and print them out
*/
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase()
    console.log(itCompanies[i])
}

/*
-- Print the array like as a sentence: 
-- Facebook, Google, Microsoft, Apple, 
-- IBM,Oracle and Amazon are big IT companies.
*/

const sliceItcompanies = itCompanies.slice(0, 6)
const sliceAmazon = itCompanies.slice(6)
console.log(sliceItcompanies.join(', ') + ` and ${sliceAmazon} are big IT companies.`)

/* 
-- Check if a certain company exists in the itCompanies array. 
-- If it exist return the company else return a company is not found
*/
const index = itCompanies.length - 1;
if(itCompanies[index].includes('Amazon')){
    console.log(itCompanies[index])
}else{
    console.log('company is not found')
}


    
/*
    Filter out companies which have 
    more than one 'o' without the filter method
*/

const filterCompany = []
for(let i of itCompanies){
    const company = i
    let count = 0;

    // count how many companies has o in their name
    for(let j of company){
        if(j === 'o'){
            count ++
            
        }
        
    }
    // push to the filter array if their 'o' is more than 1
    if (count == 2) {
        filterCompany.push(i)
    }
    
}

console.log(filterCompany.join(' ')) // [ 'Facebook', 'Google', 'Microsoft' ]

/*
-- Sort the array using sort() method
*/

console.log(itCompanies.sort())

/*
-- Reverse the array using reverse() method
*/
console.log(itCompanies.reverse())

/*
-- Slice out the first 3 companies from the array
   
-- Remove the last IT company from the array
-- Remove all IT companies
*/

console.log(itCompanies.slice(3, 7))

/*
-- Slice out the last 3 companies from the array
-- ['Facebook', 'Google', 'Microsoft', 'Apple']
*/

console.log(itCompanies.slice(0, 4)) 

/*
-- Slice out the middle IT company or companies from the array
*/

console.log(itCompanies.slice(3, 4))

/*
-- Remove the first IT company from the array
*/
itCompanies.shift()

 /*
-- Remove the middle IT company or companies from the array
*/
itCompanies.splice(2, 1)
console.log(itCompanies)

/* 
-- Remove the last IT company from the array
*/
itCompanies.pop()
console.log(itCompanies)

/* 
-- Remove all IT companies
*/

itCompanies.splice(0)
console.log(itCompanies)








