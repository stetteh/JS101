
const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');
let name;
let months;
let question;
let loanAmount;
let annualInterestRate;
let monthlyInterestRate;

function prompt(message) {
  console.log(`=> ${message}`);
}

//CHECK IF NUMBER IS VALID
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

//CHECK IF NAME IS VALID
function isvalidName(name) {
  return name.trimStart() === '' || (typeof name === 'undefined');
}

function isValidChoice(question) {
  return !['y','yes','n','no'].includes(question);
}

//DISPLAY WELCOME
prompt(MESSAGES['welcome']);

//GET THE USER NAME
prompt(MESSAGES['name']);
name = readline.question();

while (isvalidName(name)) {
  prompt(MESSAGES['validName']);
  name = readline.question();
}

//GET THE LOAN AMOUNT
function getLoanAmount() {
  prompt(MESSAGES['loanAmount']);
  loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    if (Number(loanAmount) < 0) {
      prompt(MESSAGES['zero']);
      loanAmount = readline.question();
    } else {
      prompt(MESSAGES['validNumber']);
      loanAmount = readline.question();
    }
  }
  return loanAmount;
}

//GET LOAN TERM IN YEARS AND RETURN MONTHS
function getLoanTerm() {
  prompt('Enter Loan  period in (years)');
  let loanDuration = readline.question();

  while (invalidNumber(loanDuration)) {
    if (Number(loanDuration) < 0) {
      prompt(MESSAGES['zero']);
      loanDuration = readline.question();
    } else {
      prompt(MESSAGES['validNumber']);
    }
  }
  months = Number(loanDuration) * 12;
  return months;
}

//GET THE INTEREST RATE AND CALCULATE ANNUAL INTEREST RATE
function getInterestRate() {
  prompt(MESSAGES['interestRate']);
  let interestRate = readline.question();

  while (invalidNumber(interestRate)) {
    if (Number(interestRate) < 0) {
      prompt(MESSAGES['zero']);
      interestRate = readline.question();
    } else {
      prompt(MESSAGES['validNumber']);
      interestRate = readline.question();
    }
  }
  annualInterestRate = Number(interestRate) / 100;
  return annualInterestRate;
}

//ASK USER IF THEY WANT TO TRY AGAIN
function anotherCalculation() {
  prompt(MESSAGES['tryAgain']);
  question = readline.question().toLowerCase();

  while (isValidChoice(question.toLowerCase())) {
    prompt(MESSAGES['validChoice']);
    question = readline.question().toLowerCase();
  }

  if (question === 'n' || question === 'no') {
    prompt(MESSAGES['thanks']);
  }
  return question;
}

//CALCULATE MONTHLY INTEREST RATE
function interestRateMonthly(annualInterestRate) {
  monthlyInterestRate = annualInterestRate / 12;
  return monthlyInterestRate;
}

//CALCULATE MONTHLY PAYMENT
function monthlyPayment(loanAmount, monthlyInterestRate, months) {
  let monthlyPayment = Number(loanAmount) *
                  (monthlyInterestRate /
                  (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));

  prompt(`${name} your monthly payment is: $${monthlyPayment.toFixed(2)}`);
}

do  {
  if (question) {
    console.clear();
  }

  prompt(MESSAGES['welcome1']);
  getLoanAmount();
  getInterestRate();
  getLoanTerm();
  interestRateMonthly(annualInterestRate);
  monthlyPayment(loanAmount, monthlyInterestRate, months);
  anotherCalculation();
} while (question === 'y' || question === 'yes');