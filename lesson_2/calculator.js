// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');
let question;
let output;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function isvalidName(name) {
  return name.trimStart() === '' || (typeof name === 'undefined');
}

function isValidChoice(question) {
  return !['y','yes','n','no'].includes(question);
}

function isValidDivision(number2, operation) {
  return Number(number2) === 0 && operation === '4';
}

prompt(MESSAGES['welcome']);
let name = readline.question();

while (isvalidName(name)) {
  prompt(MESSAGES['validName']);
  name = readline.question();
}

do {
  if (question) {
    console.clear();
  }

  prompt(MESSAGES['firstNumber']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['validNumber']);
    number1 = readline.question();
  }

  prompt(MESSAGES['secondNumber']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['validNumber']);
    number2 = readline.question();
  }

  prompt(MESSAGES['operationChoice']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  while (isValidDivision(number2, operation)) {
    prompt(MESSAGES['zeroNumber']);
    //prompt(MESSAGES['validNumber']);
    prompt(MESSAGES['newSecondNumber']);
    number2 = readline.question();
  }

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is ${output}`);

  prompt(MESSAGES['tryAgain']);
  question = readline.question();

  while (isValidChoice(question.toLowerCase())) {
    prompt(MESSAGES['validChoice']);
    question = readline.question();
  }
} while (question.toLowerCase() === 'y' || question.toLowerCase() === 'yes');

if (question.toLowerCase() === 'n' || question.toLowerCase() === 'no') {
  prompt(MESSAGES['thanks']);
}
