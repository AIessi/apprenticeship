const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
}

function computerPlay() {
  let options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function playerPlay(choice) {

}

document.getElementById('rock').addEventListener('click', function() {
  playerPlay('rock');
  document.getElementById('output').textContent = 'You chose rock';
});

document.getElementById('paper').addEventListener('click', function() {
    playerPlay('paper');
    document.getElementById('output').textContent = 'You chose paper';
});

document.getElementById('scissors').addEventListener('click', function() {
    playerPlay('scissors');
    document.getElementById('output').textContent = 'You chose scissors';
});

document.getElementById('reset').addEventListener('click', function() {
  playerScore = 0;
  computerScore = 0;
  moves = 0;
  document.getElementById('output').textContent = '';
});