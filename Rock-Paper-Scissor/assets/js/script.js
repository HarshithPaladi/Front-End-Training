// Get DOM elements
var playerButtons = document.querySelectorAll('.input-btn button');
var playerOptionImage = document.getElementById('player-option-image');
var computerOptionImage = document.getElementById('computer-option-image');
var playerScore = 0;
var computerScore = 0;
var playerScoreDisplay = document.getElementById('player-score');
var computerScoreDisplay = document.getElementById('computer-score');
const computerChoiceInUI = document.getElementById('computer-choice');
const playerChoiceInUI = document.getElementById('player-choice');

// Function to generate computer's choice
function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to handle the game logic
function handleGameLogic(e) {
    const playerChoice = e.target.id;
    updatePlayerOptionImage(playerChoice);
    console.log("Player Choice: " + playerChoice);

    playerChoiceInUI.textContent = playerChoice;
    // make computer-status visible and player-status invisible
    document.getElementById('computer-status').style.visibility = 'visible';
    document.getElementsByClassName('player-status')[0].style.visibility = 'hidden';
    var computerChoice = generateComputerChoice();
    console.log("Computer Choice: " + computerChoice);
    setTimeout(() => {
        updateComputerOptionImage(computerChoice);
        computerChoiceInUI.textContent = computerChoice;
        const winner = determineWinner(playerChoice, computerChoice);
        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }
        updateScores();
        document.getElementById('computer-status').style.visibility = 'hidden';
        document.getElementsByClassName('player-status')[0].style.visibility = 'visible';
    }
        , 1000);
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Function to update the scores on the UI
function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    if (playerScore === 5) {
        alert('Player wins!');
        resetGame();
    } else if (computerScore === 5) {
        alert('Computer wins!');
        resetGame();
    }
    setTimeout(() => {
        playerChoiceInUI.textContent = '';
        computerChoiceInUI.textContent = '';
    }, 1000);
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    updatePlayerOptionImage('default');
    updateComputerOptionImage('default');
    document.getElementById('player-choice').textContent = '';
    document.getElementById('computer-choice').textContent = '';
    document.getElementById('computer-status').style.visibility = 'hidden';
}

// Function to update the player's option image
function updatePlayerOptionImage(choice) {
    const imagePath = `assets/images/${choice}.jpg`;
    playerOptionImage.src = imagePath;
}

// Function to update the computer's option image
function updateComputerOptionImage(choice) {
    const imagePath = `assets/images/${choice}.jpg`;
    computerOptionImage.src = imagePath;
}

// add event listener to all the buttons
playerButtons.forEach(button => button.addEventListener('click', handleGameLogic));
