const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function pickChoice() {
  prompt('Choose one: rock, paper, scissors, lizard, spock');
  let playerChoice = readline.question();

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt("That's not a valid choice");
    playerChoice = readline.question();
  }
  return playerChoice;
}

function randomComputerChoice() {
  let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length) - 1;
  let computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(playerChoice, computerChoice) {
  prompt(`player choice is ${playerChoice} and computer choice is ${computerChoice}`);

  if (WINNING_COMBOS[playerChoice].includes(computerChoice)) {
    prompt('Player wins');
  } else if (!WINNING_COMBOS[playerChoice].includes(computerChoice)) {
    prompt('Computer wins');
  } else {
    prompt('its a tie');
  }
}

//ASK USER IF THEY WANT TO TRY AGAIN
function anotherGame() {
  prompt('do you want to try again');
  let question = readline.question().toLowerCase();

  while (!['y','yes','n','no'].includes(question) ) {
    prompt('please enter a valid choice');
    question = readline.question().toLowerCase();
  }
  if (question === 'n' || question === 'no') {
    prompt('thanks for playing');
  }

  return question;
}

while (true) {

  let choice  = pickChoice();
  let computer = randomComputerChoice();
  playerWins(choice, computer);
  displayWinner(choice, computer);
  let question = anotherGame();

  if (question === 'y' || question === 'yes') {
    console.clear();
  } else {
    break;
  }
}

