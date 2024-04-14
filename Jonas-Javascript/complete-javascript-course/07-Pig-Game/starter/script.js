'use strict'

// Selecting elements
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const currentScore0El = document.getElementById('current--0')
const currentScore1El = document.getElementById('current--1')

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


// Starting conditions
let
    currentScore,
    scores,
    isGameActive
let activePlayer = 0
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

// implementing game functionality

/** functionality to switch between players */
function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

function init() {
    currentScore = 0
    scores = [0, 0]
    isGameActive = true
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    score0El.textContent = 0
    score1El.textContent = 0
    currentScore0El.textContent = 0
    currentScore1El.textContent = 0
    diceEl.classList.add('hidden')

}
btnRoll.addEventListener('click', function () {
    /**
     * todo 1: generate random dice
     * todo 2: display dice roll
     * (is it 1)? 
     * Yes: --> switch player
     * No: add dice roll to current score
     */
    if (isGameActive) {
        const dice = Math.trunc(Math.random() * 6) + 1
        diceEl.src = `dice-${dice}.png`
        diceEl.classList.remove('hidden')

        if (dice !== 1) {
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        }
        else {
            switchPlayer()

        }
    }
})


// Functionality to hold the game

btnHold.addEventListener('click', function () {
    /**
     * todo 1: when clicked (add the current score to total score)
     * todo 2: score >= 100 ? yes : no
     * Yes: current player wins
     * No: switch player
     */
    if (isGameActive) {
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        if (scores[activePlayer] >= 100) {
            isGameActive = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            diceEl.classList.add('hidden')
        }
        else {
            switchPlayer()
        }

    }
})

btnNew.addEventListener('click', init)