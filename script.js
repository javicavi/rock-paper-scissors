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

// Checks user and computer inputs then return a string
function playGame() { // Begins the game
  let playerScore = 0;
  let computerScore = 0;

  for (let i=1; i<6; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.toLowerCase(); // Makes user input case-insensitive
   
    console.log("Round " + i + ":");

      // Winner checks between player and computer & score update 
      if (playerSelection == computerSelection) {
        console.log ("It's a tie!");
      } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore = +playerScore +1;
        console.log("You win! Rock beats scissors");
      } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats rock");
        playerScore = +playerScore +1;
      } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats paper");
        playerScore = +playerScore +1;
      } else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("You lose! Rock beats scissors");
        computerScore = +computerScore +1;
      } else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("You lose! Paper beats rock");
        computerScore = +computerScore +1;
      } else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("You lose! Scissors beats paper");
        computerScore = +computerScore +1;
      }
  }

  console.log("Player score: " + playerScore);
  console.log("Computer score: " + computerScore);
  
  // Score check and final message
  if (playerScore > computerScore) {
    console.log("Congratulations, you won!")
  } else if (playerScore == computerScore) {
    console.log("Close game but it's a tie, not bad!")
  } else {
    console.log("You lost, good luck in your next game!")
  }
}