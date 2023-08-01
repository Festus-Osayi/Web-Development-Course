'use strict';

const score0 = document.getElementById('score--0')
const currentScore0 = document.getElementById('current--0')
const score1 = document.getElementById('score--1')
const currentScore1 = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const newBtn = document.querySelector('.btn--new')
const rollBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')


let currentscore, 
activePlayer, 
scores, isPlaying;


function initilize(){

    score0.innerHTML = 0;
    score1.innerHTML = 0;
    currentscore = 0;
    activePlayer = 0;

    
    scores = [0, 0];
    isPlaying = true;
    currentScore0.innerHTML = currentscore;
    currentScore1.innerHTML = currentscore;

    diceEl.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.remove('player--active')
    player1.classList.remove('player--active')
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
}
initilize();

// This helps in switching between players.
function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).innerHTML = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentscore = 0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}


rollBtn.addEventListener('click', function () {
    if (isPlaying) {
        let dice = Math.trunc(Math.random() * 6) + 1
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`

        // check to see if the dice isn't one
        if (dice !== 1) {
            currentscore += dice;
            document.getElementById(`current--${activePlayer}`).innerHTML = currentscore
        } else {
            // switching between players...
            switchPlayer();
        }
    }
})

holdBtn.addEventListener('click', function () {
    if (isPlaying) {
        scores[activePlayer] += currentscore;

        document.getElementById(`score--${activePlayer}`).innerHTML = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            isPlaying = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            diceEl.classList.add('hidden')
        }
        else {
            switchPlayer();
        }
    }
})

newBtn.addEventListener('click', initilize)


