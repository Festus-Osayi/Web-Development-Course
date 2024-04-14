'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours : {
   thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24
    },
    
  },
  
  order: function(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function ({ time, address, starterIndex: start, mainIndex }) {
    console.log(`${this.starterMenu[start]} and ${this.mainMenu[mainIndex]} would be delivered to ${address} at ${time}`)
  },
  orderPizza: function (ing1, ing2, ing3) {
    console.log(`Here's your delicious pizza with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderAnotherPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients, otherIngredients)
  }
};









/* ==== Coding Challenge ==== 
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
Remember which character defines a new line in the textarea 😉
The solution only needs to work for a variable made out of 2 words, like a_b
Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀


-- different use case of working string
-- and it's method

function camelCasing(names){
  
const name = names.trim().split('_')
const replacedArr = []
for (let init of name) {
replacedArr.push(init.replace(init[0], init[0].toUpperCase()))

}

const camel = replacedArr.join('')
let lower = camel[0].toLowerCase() + camel.slice(1)
console.log(lower)
  
  
}


camelCasing('underscore_case')
camelCasing('first_name')
camelCasing('Some_Variable')
camelCasing('calculate_AGE')
camelCasing('delayed_departure')


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'))

document.querySelector('button').addEventListener('click', function(){
const text = document.querySelector('textarea').value
let lower = text.split('\n')
for(let [i, rows] of lower.entries()){
const[first, second] = rows.toLowerCase().trim().split("_")
const output = first + second.replace(second[0], second[0].toUpperCase())
console.log(output.padEnd(20) + `✅`.repeat(i + 1))
    
}
 

}) */








/* Topic : Strings

// find the first occurrance of r
const airline = 'Tap Air Portugal'
console.log(airline.indexOf('r'))

// find the last occurance of r
console.log(airline.lastIndexOf('r'))

// compute the length of the string.
console.log(airline.length)

// The slice method
// log to the console from index 4
console.log(airline.slice(4))

// compute from the specified indexes.
console.log(airline.slice(4, 7))

// compute with parameters
//comput from zero indexes to lastIdexof 'R'
console.log(airline.slice(0, airline.lastIndexOf('r')))

// trying out afunction with the slice
// mechansim.
function checkSeat(seat){
  // returns any character in the last index of... 
  const s = seat.slice(- 1)
  if(s === 'E' || s === 'B') {
    console.log('you got the middle seat')
  }else{
    console.log('You are lucky')
  }
}

checkSeat('11C')

function sliceFunction(names){
  let changeCasing = names.toLowerCase()
  let correct = changeCasing[0].toUpperCase() + changeCasing.slice(1)
  return correct
}

let airplane = "Let all passenger in boarding doors, come to boarding doors 23"
const replace = airplane.replace(/doors/g, 'gate')
console.log(replace)

// includes method
// returns a boolean
const names = "Festus"
console.log(names.includes('F'))

// startsWith method
// returns a boolean
console.log(names.startsWith('F'))

// endsWith method
// returns a boolean
console.log(names.endsWith('s'))

// split method
// works with divisor

// returns a new array
console.log('a+very+beginning'.split('+'))
const [firstName, lastName] = 'Festus Osayi'.split(' ')
console.log(firstName, lastName)

// join..
// split and join
const arr = ['Mr.', 'Festus', "Osayi"]
console.log(arr.join(' '))

// capitalizing a name
function capitalizeName(name){
  const names = name.split(' ')
  const namesUpper = []
  for(let n of names){
    // first approach
    // namesUpper.push(n[0].toUpperCase() + n.slice(1))
    
    // second approach
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    
  }
  console.log(namesUpper.join(' '))

}

capitalizeName('festus osayi mike jordan th')

// padding
// padding from the start
// max-length of the string
// what to pad with
console.log("Festus".padStart(15, '*'))

// padding
// padding from the end
// max-length of the string
// what to pad with
console.log('Osayi'.padEnd(20, '+'))

// repeat
// this allows us to repeat a string
// multiple times..

console.log("Festus".repeat(4)) */





















/*
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽
GOAL


const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())]
console.log(events)
gameEvents.get(92) === '🔶 Yellow card' ? gameEvents.delete(64) : gameEvents.get(92)

const avg = 90 / gameEvents.size
console.log(`An event happened, on average, every ${avg} minutes`)

for(let [eitherHalf, event] of gameEvents){
  const timeEvent = eitherHalf >= 17 && eitherHalf <= 36 ? `[FIRST HALF] ${eitherHalf}` : `[Second HALF] ${eitherHalf}`
    console.log(`${timeEvent}: ${event}`)
}*/


/* differnt mechanism of add an element
/-- to Map with the array method.

const question = new Map([
  ['question', `what's your favourie progromming language?`],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'Python'],
  [4, 'Javascript'],
  ['correct answer', 4],
  [true, 'correct 🎉'],
  [false, 'Try again']
])


const answer = Number(prompt(question.get('question')))
console.log(question.get(answer === question.get('correct answer')))
*/


/* Map in JavaScript
/-- Map declaration
/-- add elements to Map with the set Method.
const newEntries = new Map();
newEntries.set('firstName', 'Festus')
newEntries.set('lastName', 'Osayi')
newEntries.set(true, 'almost graduated from College')
newEntries.set(false, 'not graduated from College')
newEntries.set('age', 20)

/-- chaining in map
newEntries.set('school', 'Seneca College')
.set('country', 'Nigeria')
.set('resides', 'Canada')
/-- getting a value from Map, with the get Method.
console.log(newEntries.get('age'))

const age = 20;
/-- basic computing with Map..
console.log(newEntries.get(age >= newEntries.get('age')) && newEntries.get(age <= newEntries.get('age')))

/-- Map methods..
/-- computes the size of the Map
console.log(newEntries.size)
/-- checking if a key does exists
console.log(newEntries.has('age'))
/-- deleting a key
newEntries.delete('resides')
/-- clear the Map
/-- newEntries.clear()
console.log(newEntries)

/-- using an array as a key
/-- bad practice
/-- newEntries.set([1, 2], 'Test') 
const arr = [1, 2]
newEntries.set([arr], 'Test') // good practice
console.log(newEntries)

/-- advanced topics
/-- newEntries.set(document.querySelector('h1'), 'heading')
/-- console.log(newEntries) */


/*Set in javascripts..
/--creating a new set..

const entries = new Set([
    "Movies",
    "Joseph",
    "David",
    "Goliath",
    "Moses",
    "Adam",
    "Eve"
])


/--set methods
/--compute the size
console.log(entries.size) 
/--check if a value exists
console.log(entries.has("Adam")) 
/--delete a value
console.log(entries.delete('Eve')); 
/--add a new value to the set
console.log(entries.add('Eve'));
/--clears the set
console.log(entries.clear()) */


/* looping over an objects

// getting the keys
  let openDays = ``
  const openingHours = restaurant.openingHours;
  for(let items of Object.keys(openingHours)){
  openDays += ` on ${items} we open, `
  
}



/--- getting the values
  const values = Object.values(openingHours)


/--- getting the keys and values with entries
  const entries = Object.entries(openingHours)
  for(let [entry, {open, close}] of entries){
  openDays += ` at ${open} and closes ${close}`
  }
  console.log(openDays)
*/


/* 
==== optional chaining ====

/-- check to see if a value exits or not
/-- if(restaurant.openingHours.mon?.open === undefined){
  
// }

/-- on arrays and with the nullish operator
const days = [{firstName: "Festus", lastName: "Osayi", age: 20}];
console.log(days[0]?.firstName ?? "The firstName property doesn't exists");

/-- on methods
console.log(restaurant.order?.(0, 2) ?? "Empty")
*/


// ============ The for(of) operator ==============

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]

// for(const items of menu){
//   console.log(items)
// }

// getting the items indexes
// with menu.entries()
// the value with destructuring

// for(let [items, el] of menu.entries()){
//   console.log(items, el)
// }



/* restaurant.orderDelivery({
/* time: "20:00pm",
/* address: "13 hackett avenue",
/* starterIndex: 2
/* mainIndex: 0
})
*/

/* The spread operator
/* This takes up all the values from an array
*/
// const arr = [...restaurant.mainMenu];
// console.log(arr)

/* merging two arrays together with the spread
/* operator...
/* shallow copy
*/
/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
 console.log(menu)

const ingredients = [prompt("Enter your first ingredients."), prompt("Enter your second ingredient."), prompt("enter your third ingredient.")]

restaurant.orderPizza(...ingredients)

const copyRestaurant = {...restaurant}
console.log(copyRestaurant)

= **Spread operator because (=) on the right..**=

// const spreadOperator = [1, 2, 4, 5, 6]
// const copySpreadOperator = [...spreadOperator] */

/* Rest operator because the (=) on the left while
-- in the process of destructuring
-- the rest operator needs to be on the last elem
-- of the array while destructuring
*/

/* rest patterns on an arrays
const arrRest = [1, 2, 5, 8, 9]
const[a, b, ...others] = arrRest
console.log(a, b)

// rest patterns on objects
const[x, , y, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(x, y, otherFood);

const{sat, ...otherWeekdays} = restaurant.openingHours
console.log(sat, otherWeekdays)

const addRest = (...b)=>{
  let sum = 0;
  for(let i = 0; i < b.length; i++){
    sum += b[i];
  }
  return sum;

}


restaurant.orderAnotherPizza("Mushroom", "apple", "pizza")
*/



/*
===================== Coding Challenge 1 =============================

We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored*/




const games = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};




// The first player in any player array is the goalkeeper and the others are field

// team1 Bayern Munich
// const [player1, players2] = game.players
// const[neur, ...bayernFieldPlayers] = player1



// team2 Borrusia Dortmund
// const [burki, ...dortmundFieldPlayers] = players2


// Creating an array 'allPlayers' containing all players of both teams (22
// players)

// const allPlayers = [...player1, ...players2]

// During the game, Bayern Munich(team 1) used 3 substitute players.So create a
// new array('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final)

// 5. Based on the game.odds object, create one variable for each odd(called
// 'team1', 'draw' and 'team2')

// const{odds: {team1, x:draw, team2}} = game
// console.log(team1, draw, team2)

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names(not an array) and prints each of them to the console, along with the
// number of goals that were scored in total(number of player names passed in)

// function printGoals(...playerName) {
//   return `${playerName} and scores in total is, ${playerName.length}`
// }

// console.log(printGoals("Davies", "Muller", "Lewandowski", "Kimmich"))
// console.log(printGoals("Davies", "Muller"))

// for(let [playerScore, playerName] of game.scored.entries()){
//   console.log(`${playerScore + 1}: ${playerName}`)
// }

// const avg = Object.values(game.odds);


// function calcAvgOdds(score){
//   let sum = 0;
//   for(let i = 0; i < score.length; i++){
//     sum += score[i] / score.length;
//   }
  
//   return sum;
// }

// console.log(`The averge odd is: ${calcAvgOdds(avg).toFixed(2)}`)

// two possible options..
// console.log(`Odd of victory ${game.team1}: ${team1}`)
// console.log(`Odd of draw: ${draw}`)d
// console.log(`Odd of victory ${game.team2}: ${team2}`)
// for(let [team, odd] of Object.entries(game.odds)){
//   // const teamm = team === 'x' ? "draw" : `victory ${game[team]}`
//   // console.log(`odd of ${teamm} ${odd}`)
//   const teams = team === 'team1' ? `odd of victory ${game.team1}: ${odd}` : `odd of victory ${game.team2}: ${odd}`
//   const teamStr = team === 'x' ? `odd of draw: ${odd}` : teams
//   console.log(`${teamStr}`)

// }

// as a reference for creating the game scorer objects or scores
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers)






// 7. The team with the lower odd is more likely to win.Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.

// team1 < team2 && console.log(`The team1 is more likely to be a winner`) 

//==============================================
// objects destructuring..

// let[main, secondary] = restaurant.order(2, 0)
// console.log(main, secondary)

// ;[main, secondary] = [secondary, main]
// console.log(main, secondary)

// const{name, starterMenu, categories} = restaurant

// // mutating an objects
// let a = 111;
// let b = 999;
// const obj = {a: 2, b: 20, c: 18};

// ({a, b} = obj);
// console.log(a, b);

//=========================================
// array destructuring..
// const arrValue = [1, 2, 3]
// const[x, y, z] = arrValue
// console.log(x, y, z)

// nested arrays destructuring
// const arr = [1, 3, 5, [8, 9]]
// const[a=[],,,b] = arr
// console.log(a, b,)
// console.log(a, b, c, d)

// setting a default value
// const arr1 = [1, 3, 5, [8, 9]]
// const [i = [], , , j] = arr



















