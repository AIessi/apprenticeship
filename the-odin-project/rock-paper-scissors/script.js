function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
        return 'You lose! Paper beats Rock';
        } else {
        return 'You win! Rock beats Scissors';
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper';
        } else {
        return 'You win! Paper beats Rock';
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors';
        } else {
        return 'You win! Scissors beats Paper';
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));