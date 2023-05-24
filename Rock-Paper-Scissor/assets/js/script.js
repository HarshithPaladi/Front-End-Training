// Get DOM elements
const playerButtons = document.querySelectorAll('.player-options button');
const playerChoiceDisplay = document.getElementById('player-choice');
const playerScoreDisplay = document.getElementById('player-score');
const computerButtons = document.querySelectorAll('.computer-options button');
const computerChoiceDisplay = document.getElementById('computer-choice');
const computerScoreDisplay = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

// Function to generate computer's choice
function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
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
}

const playerOptionImage = document.getElementById('player-option-image');
const computerOptionImage = document.getElementById('computer-option-image');

// Function to update the player's option image
function updatePlayerOptionImage(choice) {
    const imagePath = `assets/images/${choice}.jpg`; // Path to the image based on the choice
    playerOptionImage.src = imagePath;
}

// Function to update the computer's option image
function updateComputerOptionImage(choice) {
    const imagePath = `assets/images/${choice}.jpg`; // Path to the image based on the choice
    computerOptionImage.src = imagePath;
}
// Function to display the choices made by player and computer
function displayChoices(playerChoice, computerChoice) {
    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;
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

// Function to handle player's turn
function handlePlayerTurn(e) {
    const playerChoice = e.target.id;
    const computerChoice = generateComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    displayChoices(playerChoice, computerChoice);

    if (result === 'player') {
        playerScore++;
    } else if (result === 'computer') {
        computerScore++;
    }
    updatePlayerOptionImage(playerChoice);
    updateComputerOptionImage(computerChoice);
    updateScores();
}

// Function to handle computer's turn
function handleComputerTurn() {
    const playerChoice = generateComputerChoice();
    const computerChoice = generateComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    displayChoices(playerChoice, computerChoice);

    if (result === 'player') {
        playerScore++;
    } else if (result === 'computer') {
        computerScore++;
    }
    updatePlayerOptionImage(playerChoice);
    updateComputerOptionImage(computerChoice);
    updateScores();
}
// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
}
// Add event listeners to player buttons
playerButtons.forEach((button) => {
    button.addEventListener('click', handlePlayerTurn);
});
