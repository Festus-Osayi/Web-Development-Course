'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0;
let scores = document.querySelector('.score')
scores.textContent = score


document.querySelector('.check').addEventListener('click', function () {
    const guess = +document.querySelector('.guess').value
    const message = document.querySelector('.message')

    // when there is no guess
    if (!guess) {
        message.textContent = '⛔ not a number'
    }

    // when the guess is correct
    else if (guess === secretNumber) {
        message.textContent = '🎉 Correct number'
        document.querySelector('.number').textContent = secretNumber
        document.body.style.backgroundColor = 'green'
        document.querySelector('.number').style.width = '30rem'
        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }

    }

    // when the guess is too high
    else if (guess !== secretNumber) {

        if (score > 1) {
            guess > secretNumber ? message.textContent = '📈 value too high' : "📉 value too low"
            scores.textContent = score -= 1
        } else {
            message.textContent = '😭 you lost the game'
            scores.textContent = 0
            
        }
       

    }

    // // when the guess is too low
    // else if (guess < secretNumber) {

    //     if (score > 1) {
    //         message.textContent = ''
    //         scores.textContent = score -= 1
    //     } else {
    //         message.textContent = '😭 you lost the game'
    //         scores.textContent = 0
    //     }
    // }

})


function resetGame() {
    const guess = document.querySelector('.guess')
    const message = document.querySelector('.message')

    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.number').textContent = "?"
    guess.value = ""
    message.textContent = 'Start guessing...'
    scores.textContent = 20
    document.body.style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
}
document.querySelector('.again').addEventListener('click', resetGame)

