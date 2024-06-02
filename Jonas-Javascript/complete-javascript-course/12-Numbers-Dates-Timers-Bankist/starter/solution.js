'use strict'

setTimeout((ing1, ing2)=> console.log(`Here is your pizza with ${ing1} and ${ing2}`), 3000, ...['onions', 'spinach'])

/** date api */
const dates = new Date()

const formattedDate = Intl.DateTimeFormat('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'}).format(dates)
console.log(formattedDate); // 10/2

// const startLogoutTimer = function(){
//     /** todo 1: Set the timer to 5 minutes 
//      * todo 2: call the timer every second
//      * todo 3: in each call print the timer to UI
//      * todo 3: Decrease by 1s
//      * todo 4: when 0 seconds, stop timer (logout)
//     */
// }