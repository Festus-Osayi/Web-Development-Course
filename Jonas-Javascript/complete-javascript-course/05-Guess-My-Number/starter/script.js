'use strict';

let gameScores = 20;
let highscore = 0;

const checkBtn = document.querySelector('.check');
const score = document.querySelector('.score')
const again = document.querySelector('.again');
const number = document.querySelector('.number')
const highScore = document.querySelector('.highscore')
const bodyEl = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1

function displayMessage(message) {
    document.querySelector('.message').innerHTML = message;
}

checkBtn.addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value)


    if (!guess) {
        displayMessage(`Empty field, please input a number ❗`)
    }
    else if (guess === secretNumber) {
        number.innerHTML = secretNumber
        displayMessage('Correct number 🎉')
        bodyEl.style.backgroundColor = 'green'
        if (gameScores > highscore) {
            highscore = gameScores;
            highScore.innerHTML = highscore;

        }
    }
    else if (guess !== secretNumber) {
        if (gameScores > 1) {

            guess > secretNumber ? displayMessage('Value too high, please try again!') : displayMessage('Value too low')
            gameScores--;
            score.innerHTML = gameScores;
        } else {
            displayMessage('You lost the game!')
            score.innerHTML = 0;
        }
    }


})

again.addEventListener('click', function () {
    gameScores = 20
    score.innerHTML = gameScores;
    secretNumber = Math.trunc(Math.random() * 20) + 1
    number.innerHTML = "?";
    document.querySelector('.guess').value = " ";
    displayMessage('Start guessing...')
    bodyEl.style.backgroundColor = '#222'


})