/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
Data 1: [5, 2, 4, 1, 15, 8, 3]
Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
    const humanAge = ages.map(dogAge =>
        dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)

    const filterAge = humanAge.filter(ages => ages >= 18)

    const calcAvg = filterAge.reduce((acc, dogs, i, arr) =>
        acc + dogs / arr.length
        , 0)
    return calcAvg
}

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))


/*
-- Method chaining
*/
const calcAverageHumanAge2 = function (dogs) {
    const humanAge = dogs.map((dogAge) => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)
        .filter(dogs => dogs >= 18)
        .reduce((acc, avgAge, i, arr) =>
            acc + avgAge / arr.length, 0)

    return humanAge
}

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))


// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444
};

const accounts = [account1, account2, account3, account4];

/*
-- The for of loop
*/
function findElement(arr) {

    for (let i of arr) {
        if (i.owner === 'Jessica Davis') {
            console.log(i)
        }
    }
}

// findElement(accounts)

// The finds method
const findsElement = function (acc) {
    const check = acc.find((names) => names.owner === 'Jessica Davis')

    return check

}




/*
======== Revision ========
*/

/*
Flat methods
*/

const flatenArray = function (arr) {
    const arrFlaten = arr.map(({ movements }) => movements)
    return arrFlaten.flat()
}


const z = Array.from({ length: 1000 }, () => Math.trunc(Math.random() * 1000 + 1))

/*--------------------------------
===== Array Methods Practice =====
----------------------------------
*/

function movements(acc) {
    const movs = acc.flatMap((accs) => accs.movements)
        .filter((movs) => movs > 0)
        .reduce((acc, currMovements) => acc + currMovements, 0)
    return movs


}

// console.log(movements(accounts))

const numDeposit = function (deposit) {
    const countDeposit = deposit.flatMap((depo) => depo.movements)
        .reduce((acc, curr) => curr >= 1000 ? ++acc : acc, 0)
    return countDeposit


}
// console.log(numDeposit(accounts))


/*
---- creating a brand new objects with the
---- reduce method
*/

const obj = function (acc) {
    const movs = acc.flatMap((accs) => accs.movements)
        .reduce((sums, curr) => {
            curr > 0 ? sums.deposits += curr : sums.withdrawals += curr
            return sums
        }, { deposits: 0, withdrawals: 0 })
    return movs
}

// console.log(obj(accounts))

const capitalizeWord = function (title) {
    const exceptions = ['an']
    const capitalize = title.toLowerCase().split(' ')
        .map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1))


    return capitalize
}

// console.log(capitalizeWord("This is an empty string"))

/*
Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)
Hints:
Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉
Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.
Test data:
const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
{ weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
{ weight: 32, curFood: 340, owners: ['Michael'] },
];
GOOD LUCK 😀
*/

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];


dogs.forEach(dog => dog.recommendFood = Math.trunc(dog.weight ** 0.75 * 28))

dogs.filter(dogOwner => dogOwner.owners.includes('Sarah'))
    .map(dogWeight => dogWeight.curFood > (dogWeight.recommendFood * 0.90) && dogWeight.curFood < (dogWeight.recommendFood * 1.10) ? console.log(`${dogWeight.owners[0]} dog eat too little`) : console.log(`${dogWeight.owners[0]} dog eats too much`))



const ownersEatTooMuch = dogs.filter(allOwners => allOwners.curFood > allOwners.recommendFood).flatMap(allOwners => allOwners.owners)

const ownersEatTooLittle = dogs.filter(allOwners => allOwners.curFood < allOwners.recommendFood).flatMap(allOwners => allOwners.owners)

console.log(`${ownersEatTooMuch.join(' and ')} eats too much`)
console.log(`${ownersEatTooLittle.join(' and ')} eats too little`)

console.log(dogs.some(allOwners =>
    allOwners.curFood === allOwners.recommendFood
))

const okayAmount = () => dogs.some(dog => dog.curFood > (dog.recommendFood * 0.90) && dog.curFood < (dog.recommendFood *
1.10))

console.log(okayAmount())

const copyDog = dogs.slice().filter(okayAmount).sort((a, b)=> a.recommendFood - b.recommendFood )
console.log(copyDog)



























































