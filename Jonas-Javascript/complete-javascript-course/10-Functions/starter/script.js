
/*
-- Closures
*/

// let f;
// function countPassenger(){
//     let a = 23

//     f = function(){
       
//         console.log(a * 2)
//     }
// }

// const b = function(){
//     let b = 777
//     f = function () {

//         console.log(b * 2)
//     }
// }


(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red'
    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue'
    })
})();












/*
IIFE (immediately invoke function expression)

*/

// (function(){
//     console.log('This is private')
// })();



/*
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
Data 1: [5, 2, 3]
Data 2: [1, 5, 3, 9, 6, 1]

*/

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer: function () {
        let check = true;
        // const input = Number(prompt(`${this.question}\n${this.options.join('\n')} \n(Write option number)`))

        if (typeof input !== 'number') {
            check = false
        }
        else if (input > this.answers.length) {
            check = false
        }
        else {
            check = true;
            this.answers[input]++
            this.displayResults()
            this.displayResults('string')
            
        }
        return check



    },

    displayResults: function(type = 'array'){
        
       
        if(type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
        else {
            console.log(this.answers)
        }
        
       
        
    }

};

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

// poll.displayResults.call({answers: [5,3,2]})

































/*
-- (The call method)
-- when passing a method
-- to a new object

const lufthansa = {
    airline: "lufthansa",
    airAtCode: 'LH',
    bookings: [],
    book: function (flighNum, name) {
        console.log(`${name} booked a flight in ${this.airline} with ${this.airAtCode}${flighNum}`)
        this.bookings.push({ Flight: this.airline }, `name: ${name}, Flight Number: ${this.airAtCode}${flighNum}`)
    }
}

lufthansa.book(234, "Festus")
const euroWins = {
    airline: 'euroWins',
    airAtCode: 'EW',
    bookings: []
}

console.log(lufthansa)

const book = lufthansa.book

book.call(euroWins, 234, "Osayi")
console.log(euroWins)

/*
-- (Apply method)
-- This works exactly as the call method
-- but the apply method takes an arguments
-- as an array
*/

/*
const swiss = {
    airline: 'Swiss',
    airAtCode: 'SW',
    bookings: []
}

const flightData = [295, "Igbinedion"]
book.apply(swiss, [...flightData])
console.log(swiss)

*/

/*
-- (bind method)
-- this creates a new function
-- which is bind to a specific objects

const bookEw = book.bind(euroWins)
bookEw(123, 'Osazuwa Destiny')

*/


/*
-- (partial application)
-- it means the part of an application
-- has already been compute
*/

/*
const bookEw23 = book.bind(euroWins, 23)
bookEw23('Seneca College')
console.log(euroWins)

euroWins.newPlane = 300
euroWins.buyPlane = function () {
    console.log(this)
    this.newPlane++
    console.log(this.newPlane)
}

*/

// document.querySelector('.buy').addEventListener('click', euroWins.buyPlane.bind(euroWins))

/*
-- bind() method
-- with a function
-- with no (this) keyword

const addTax = (rate, value) => value + value * rate
const addVat = addTax.bind(null)
console.log(addVat(0.1, 100))


-- partial Application


const addrate23 = addTax.bind(null, 0.23)
console.log(addrate23(100))
* /

const

/* 
-- A brief introduction to closure
-- A function returning a function
*/

/*

const addTax = function (rate) {
    return function (value) {
        return (value + value * rate)
    }
}

const addVat = addTax(0.23)
console.log(addVat(100))



function greet(greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}

*/

/*
-- Higher order function..
-- A function that recieves other
-- function as argument, or rather
-- return a new function or both
*/
/*
function emailVerification(email, email2) {
    const checkEmail = email.toLowerCase().trim()
    const checkCorrectEmail = email2.toLowerCase().trim()
    if (checkEmail === checkCorrectEmail) {
        console.log(`The ${email2} matched the authorised ${email} `)
    }
    else {
        console.log(`The ${email} doesn't match ${email2}`)
    }
}


const checkAuthorisedEmail = function (email, correctEmail, fn) {
    return fn(email, correctEmail)
}

checkAuthorisedEmail('osayifestus25@outlook.comm', 'osayifestus25@outlook.com', emailVerification)

*/



/*
-- How passing by reference and 
-- arguments works

const changeName = "Lucky"
const example = {
    names: "Festus"
}

function ref_obj(name, namesk){
    name = 'Whatss'
    namesk.names = "Osayi"
    console.log(name, name.names)
}

ref_obj(changeName, example)
ref_obj(changeName)

*/







