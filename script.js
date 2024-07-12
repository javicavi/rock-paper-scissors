const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");
const playerScore = document.querySelector("#playerScr");
const computerScore = document.querySelector("#computerScr");
const roundMessage = document.querySelector("#roundMsg p");
const restartButton = document.querySelector("#restartBtn");

rockButton.addEventListener("click", () => {
  playRound(rockButton.value.toLowerCase())
});
paperButton.addEventListener("click", () => {
  playRound(paperButton.value.toLowerCase())
});
scissorsButton.addEventListener("click", () => {
  playRound(scissorsButton.value.toLowerCase())
});

restartButton.addEventListener("click", restart);

// Begins the game
function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  // console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);
  roundWinner(playerSelection, computerSelection);
  if(playerScore.textContent >= 5 || computerScore.textContent >= 5) {
    gameEnd();
  }
}

// Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() { 
  let choice = Math.floor(Math.random() * 3); // Round and return a number between 0 and 2
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Check the round winner and update the score
function roundWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    roundMessage.textContent = "It's a tie!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
    roundMessage.textContent = "You win! Rock beats scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    roundMessage.textContent = "You win! Paper beats rock";
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    roundMessage.textContent = "You win! Scissors beats paper";
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    roundMessage.textContent = "You lose! Rock beats scissors";
    computerScore.textContent = parseInt(computerScore.textContent) +1;
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    roundMessage.textContent = "You lose! Paper beats rock";
    computerScore.textContent = parseInt(computerScore.textContent) +1;
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    roundMessage.textContent = "You lose! Scissors beats paper";
    computerScore.textContent = parseInt(computerScore.textContent) +1;
  }
}

// Disable game buttons and show a message with the winner
function gameEnd() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  if (playerScore.textContent > computerScore.textContent) {
    roundMessage.textContent = "Congratulations, you won!";
  } else {
    roundMessage.textContent = "You lost, good luck in your next game!";
  }
}

// Enable the game buttons, and also reset the score and results text
function restart() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  roundMessage.textContent = "";
  playerScore.textContent = 0;
  computerScore.textContent = 0;
}