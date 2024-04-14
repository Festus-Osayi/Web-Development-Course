'use strict'
/** A closer look at functions and closures */
const sumArray = function (arr) {
    let sum = 0
    for (let i of arr) {
        sum += i
    }
    return sum;
}

function printArray(str, fn) {
    console.log(fn)
    return fn(str)
}

console.log(printArray([12, 2, 5, 8], sumArray))

const greet = (greetings) => (name) => console.log(`${greetings}, ${name}!`)



const theGreeter = greet('Hey')
theGreeter("Alice") // Hey, Alice!

const nigeria = {
    airline: 'AirPeace',
    bookings: [],
    book(flightNo, passengerName) {
        console.log(`${passengerName} with seat ${flightNo} booked a flight in ${this.airline}`)
        this.bookings.push({ flightNo, passengerName })
        console.log(this.bookings);
    }
}


nigeria.book(2349, 'Festus Osayi')

const turkey = {
    airline: 'AirMaroc',
    bookings: [],

}


const book = nigeria.book
book.call(turkey, 23)
book.call(turkey, "John Doe")

const addTax = (rate) => (value) => value + value * rate

const addVat = addTax(0.23)
console.log(addVat(200))


/** Coding  Challenge 1 *
 * Let's build a simple poll app!
 * A poll has a question, an array of options from 
 * which people can choose, and an array with the 
 * number of replies for each option. This data is 
 * stored in the starter 'poll' object below.
 * todo 1: Create a method called
 *  'registerNewAnswer' on the 'poll' object. The 
 * method does 2 things:
 * 1.1. Display a prompt window for the user to input the number of the selected option. 
 * The prompt should look like this:
 * What is your favourite programming language?
 * 0: JavaScript
 * 1: Python
 * 2: Rust
 * 3: C++
 * (Write option number)
 * 1.2. Based on the input number, update the 
 * 'answers' array property. For example, if the option is 3, increase the value at position 3 of 
 * the array by 1. 
 * Make sure to check if the input is a number and if the number makes 
 * sense (e.g. answer 52 wouldn't make sense, right?)
 * todo 2: Call this method whenever the user clicks the "Answer poll" button.
 * todo 3: Create a method 'displayResults' which displays the poll results. 
 * The method takes a string as an input (called 'type'), which can be either 'string'
 * or 'array'. If type is 'array', simply display the results array as it is, using console.log().
 *  This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
 * todo 4: Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
 * todo 5: Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?
 * Test data for bonus:
 * - Data 1: [5, 2, 3]
 * - Data 2: [1, 5, 3, 9, 6, 1]
 * Hints: Use many of the tools you learned about in this and the last section
 * GOOD LUCK 
*/

const polls = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        let userInput = Number(prompt(`${this.question} \n${this.options.join('\n')}\n(Write option number)`))
        if (typeof userInput === 'number' && userInput < this.options.length) {

            this.answers[userInput]++


        }
        this.displayResults()
    },
    displayResults(type = 'array') {

        if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(", ")}`)
        } else {
            console.log(this.answers)
        }
    }

};

document.querySelector('.poll').addEventListener('click', polls.registerNewAnswer.bind(polls));


// polls.displayResults.call({ answers: [1, 2, 3] })

(
    function () {
        const header = document.querySelector('h1');
        header.style.color = 'red'
        document.body.addEventListener('click', function () {
            header.style.color = 'pink'
        })

    }
)();



