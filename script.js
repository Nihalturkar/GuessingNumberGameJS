let random = parseInt(Math.random() * 100 + 1)

const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const guesses = document.querySelector(".guesses");
const remguess = document.querySelector(".remain");
const lowORhi = document.querySelector(".LoworHi");
const result = document.querySelector(".resPart");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        console.log(guess); //checking user input....
        validateGuess(guess);
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number!");
    }
    else if (guess < 1) {
        alert('PLease enter a number more than 1');
    }
    else if (guess > 100) {
        alert('PLease enter a  number less than 100');
    }
    else {
        prevGuess.push(guess);
       if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over! Random Number was ${random}`)
            endGame();
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if (guess === random) {
        displayMessage(`Congrets ! You guessed it Right`)
    }
    else if (guess < random && random < 50) {
        displayMessage(`Number is Too low ! and less than 50 `)
    }
    else if (guess > random && random > 50) {
        displayMessage(`Number is  too High! and more than 50`);
    }
}
function displayGuess(guess) {
    input.value = '';
    guesses.innerHTML += `${guess},`;
    numGuess++;
    remguess.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    lowORhi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
    input.value = '';
    input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    const newgame = document.querySelector("#newGame");
    newgame.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}