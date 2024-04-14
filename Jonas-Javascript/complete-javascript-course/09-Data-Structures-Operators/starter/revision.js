'use strict'





const restaurants = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
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

};




/** Destructuring assignment
 * @param: books array
 */

const books = [
    {
        title: 'Algorithms',
        author: ['Robert Sedgewick', 'Kevin Wayne'],
        publisher: 'Addison-Wesley Professional',
        publicationDate: '2011-03-24',
        edition: 4,
        keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
        pages: 976,
        format: 'hardcover',
        ISBN: '9780321573513',
        language: 'English',
        programmingLanguage: 'Java',
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.41,
                ratingsCount: 1733,
                reviewsCount: 63,
                fiveStarRatingCount: 976,
                oneStarRatingCount: 13
            }
        },
        highlighted: true
    },
    {
        title: 'Structure and Interpretation of Computer Programs',
        author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
        publisher: 'The MIT Press',
        publicationDate: '2022-04-12',
        edition: 2,
        keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
        pages: 640,
        format: 'paperback',
        ISBN: '9780262543231',
        language: 'English',
        programmingLanguage: 'JavaScript',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.36,
                ratingsCount: 14,
                reviewsCount: 3,
                fiveStarRatingCount: 8,
                oneStarRatingCount: 0
            }
        },
        highlighted: true
    },
    {
        title: 'Computer Systems: A Programmer\'s Perspective',
        author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
        publisher: 'Prentice Hall',
        publicationDate: '2002-01-01',
        edition: 1,
        keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
        pages: 978,
        format: 'hardcover',
        ISBN: '9780130340740',
        language: 'English',
        programmingLanguage: 'C',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 1010,
                reviewsCount: 57,
                fiveStarRatingCount: 638,
                oneStarRatingCount: 16
            }
        },
        highlighted: true
    },
    {
        title: 'Operating System Concepts',
        author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
        publisher: 'John Wiley & Sons',
        publicationDate: '2004-12-14',
        edition: 10,
        keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
        pages: 921,
        format: 'hardcover',
        ISBN: '9780471694663',
        language: 'English',
        programmingLanguage: 'C, Java',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 3.9,
                ratingsCount: 2131,
                reviewsCount: 114,
                fiveStarRatingCount: 728,
                oneStarRatingCount: 65
            }
        }
    },
    {
        title: 'Engineering Mathematics',
        author: ['K.A. Stroud', 'Dexter J. Booth'],
        publisher: 'Palgrave',
        publicationDate: '2007-01-01',
        edition: 14,
        keywords: ['mathematics', 'engineering'],
        pages: 1288,
        format: 'paperback',
        ISBN: '9781403942463',
        language: 'English',
        programmingLanguage: null,
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.35,
                ratingsCount: 370,
                reviewsCount: 18,
                fiveStarRatingCount: 211,
                oneStarRatingCount: 6
            }
        },
        highlighted: true
    },
    {
        title: 'The Personal MBA: Master the Art of Business',
        author: 'Josh Kaufman',
        publisher: 'Portfolio',
        publicationDate: '2010-12-30',
        keywords: ['business'],
        pages: 416,
        format: 'hardcover',
        ISBN: '9781591843528',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.11,
                ratingsCount: 40119,
                reviewsCount: 1351,
                fiveStarRatingCount: 18033,
                oneStarRatingCount: 1090
            }
        }
    },
    {
        title: 'Crafting Interpreters',
        author: 'Robert Nystrom',
        publisher: 'Genever Benning',
        publicationDate: '2021-07-28',
        keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
        pages: 865,
        format: 'paperback',
        ISBN: '9780990582939',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.7,
                ratingsCount: 253,
                reviewsCount: 23,
                fiveStarRatingCount: 193,
                oneStarRatingCount: 0
            }
        }
    },
    {
        title: 'Deep Work: Rules for Focused Success in a Distracted World',
        author: 'Cal Newport',
        publisher: 'Grand Central Publishing',
        publicationDate: '2016-01-05',
        edition: 1,
        keywords: ['work', 'focus', 'personal development', 'business'],
        pages: 296,
        format: 'hardcover',
        ISBN: '9781455586691',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.19,
                ratingsCount: 144584,
                reviewsCount: 11598,
                fiveStarRatingCount: 63405,
                oneStarRatingCount: 1808
            }
        },
        highlighted: true
    }
];

/** 
 * todo 1.1: Destructure the books array into two variables called firstBook and secondBook.
 */
const [firstBook, secondBook] = books
console.log({ firstBook }, { secondBook })

/** 
 * todo 1.2: Destructure the books array into a variable called thirdBook. You must skip the first two books.
 */

const [, , thirdBook] = books
console.log({ thirdBook })

/**
 * todo 1.3: Below is the nested ratings array that contains two other arrays. 
 * Destructure the nested ratings arrays into two variables called rating and ratingsCount. 
 * In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
 */

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingsCount]] = ratings
console.log({ rating }, { ratingsCount })

/** 
 * todo 1.4: Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. 
 * Assign the threeStarRatings variable with a default value of 0.
 */

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars
console.log({ fiveStarRatings, oneStarRatings, threeStarRatings });

/** The spread operator */
const menu = [...restaurants.mainMenu, ...restaurants.starterMenu]

/** Nullish operator */
let num = 0
num ??= 5


/**
 * Exercise - 1
 * We're building a football betting app (soccer for my American friends 😅)!
 * Suppose we get data from a web service about a certain game 
 * ('game' variable on next page). In this challenge we're gonna work with that data.
 * todo 1.1: Create one player array for each team (variables 'players1' and 'players2')
 * todo 1.2: The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
* todo 1.3: Create an array 'allPlayers' containing all players of both teams (22 players)
* todo 1.4: During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
* todo 1.5: Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
* todo 1.6: Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
* todo 1.7: The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

* Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

const game = {
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

const [players1, players2] = game.players
const [gk, ...fieldPlayers] = players1
const allPlayers = [...players1, ...players2]
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']

const { odds: { team1, x: draw, team2 } } = game
function printGoals(...playerName) {
    console.log(...playerName)
    console.log(playerName.length)


}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals(...game.scored)

team1 < team2 && console.log(`Team 1 is more likely to win`)

/** For of loop
 * entries() - compute array index and values
 */

// for (let [index, elem] of menu.entries()) {
//     console.log(`${index + 1}: ${elem}`)
// }

/** loop through object (Keys - Values) 
 * Object.key(obj) - returns the object keys as an array
 * Object.values(obj) - returns the objects value as an array
 * Object.entries(obj) - returns key-value pairs in arrays
*/
const { openingHours } = restaurants
console.log(openingHours)
const hours = Object.keys(openingHours)
for (let openHours of hours) {
    console.log(openingHours[openHours])
}

/** Coding Challenge #2
 * Let's continue with our football betting app! Keep using the 'game' variable from
before.
* todo 1.1: Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
* todo 1.2: Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
* todo 1.3: Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
* Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀
 */

for (let [index, scorer] of game.scored.entries()) {
    console.log(`${index + 1}: ${scorer}`)
}

/** Calculate the average odd */

let sum = 0
for (let avgOdd of Object.values(game.odds)) {
    sum += avgOdd / 3

}
console.log(sum)

const teams = Object.keys(game.odds)
for (let team of teams) {
    console.log(`Odds of victory ${game?.[team] ?? 'x'}: ${game.odds[team]}`)
}

let scorer = {}
for (let scorers of game.scored.entries()) {
    scorer[scorers] ? scorer[scorers]++ : scorer[scorers] = 1;
    console.log(scorer[scorers]++)

}

const arr = ['Fish', 'Fish', 'Rice', 'Eat']
const uniqueArr = new Set(arr)
console.log(uniqueArr.add('Beans'))

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct🎉'],
    [false, 'Try again!']
])

// console.log(question.get('question'))
// for (let [key, value] of question) {
//     if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
// }
// const answer = Number(prompt('Your Answer'))
// console.log(question.get(question.get('correct') === answer))

/** Coding Challenge #3 - Map and Sets 
 * Let's continue with our football betting app! This time, we have a map called
 * 'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened 
(a football game has 90 minutes plus some extra time).
* todo 1.1: Create an array 'events' of the different game events that happened (no
duplicates)
* todo 1.2: After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
* todo 1.3: Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
* todo 1.4: Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽
GOAL
*/

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


/** todo 1.1: create a unique array */
const events = [...new Set(gameEvents.values())]

/** todo 1.2: Delete the game event (64) */
if (gameEvents.has(64)) {
    gameEvents.delete(64)
}

/** todo 1.3: compute on average when an event
 * happened*/
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`)

/** todo 1.4: */

for (let [eventHalf, event] of gameEvents) {
    if (eventHalf <= 45) {
        console.log(`First half ${eventHalf}: ${event}`)
    }
    else {
        console.log(`Second half ${eventHalf}: ${event}`)
    }
}

/** Exercise - String and working with String
 * Write a program that receives a list of variable names written in underscore_case
 * and convert them to camelCase. The input will come from a textarea inserted into the DOM (see code below to insert the elements)
 * and conversion will happen when the button is pressed.
 * Test data (pasted to textarea, including spaces):
 * underscore_case
 * first_name
 * Some_Variable
 * calculate_AGE
 * delayed_departure
 * Should produce this output (5 separate console.log outputs):
 * underscoreCase ✅
 * firstName ✅✅
 * someVariable ✅✅✅
 * calculateAge ✅✅✅✅
 * delayedDeparture
 */

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea')
const btn = document.querySelector('button')

function convertToCamelCasing() {
    let trimData = textArea.value.trim().toLowerCase().split('\n')
    console.log(trimData)
    
    for (let [i, data] of trimData.entries()) {
        let newData = data.split("_")
        let c = newData[1].slice(1)
        let toCamelCase = newData[1][0].toUpperCase() + c
        let thisS = newData[0] + toCamelCase
        console.log(thisS.padEnd(20, " ") + '✅'.repeat(i + 1))
    }


}
btn.addEventListener('click', function () {

    convertToCamelCasing()

})

/** String exercises */






