
const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');

//DISPLAY WELCOME
prompt(MESSAGES['welcome']);

//GET THE USER NAME
prompt(MESSAGES['name']);
let name = readline.question();

while (isValidName(name)) {
  prompt(MESSAGES['validName']);
  name = readline.question();
}

function prompt(message) {
  console.log(`=> ${message}`);
}

//CHECK IF NUMBER IS VALID
function isValidNumber(number) {
  return number.trimStart() === '' ||
         Number(number) < 0 ||
         Number.isNaN(Number(number));
}

//CHECK IF NAME IS VALID
function isValidName(name) {
  return name.trimStart() === '' || (typeof name === 'undefined');
}

//CHECK IF CHOICE IS VALID
function isValidChoice(question) {
  return !['y','yes','n','no'].includes(question);
}

//GET THE LOAN AMOUNT
let loanAmount;
function getLoanAmount() {
  prompt(MESSAGES['loanAmount']);
  loanAmount = readline.question();

  while (isValidNumber(loanAmount)) {
    if (loanAmount < 0) {
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
let months;
function getLoanTerm() {
  prompt('Enter Loan period in (years)');
  let loanDuration = readline.question();

  while (isValidNumber(loanDuration)) {
    if (loanDuration < 0) {
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
let annualInterestRate;
function getInterestRate() {
  prompt(MESSAGES['interestRate']);
  let interestRate = readline.question();

  while (isValidNumber(interestRate)) {
    if (interestRate < 0) {
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

//CALCULATE MONTHLY INTEREST RATE
let monthlyInterestRate;
function interestRateMonthly(annualInterestRate) {
  monthlyInterestRate = annualInterestRate / 12;
  return monthlyInterestRate;
}

//CALCULATE MONTHLY PAYMENT
function monthlyPayment(loanAmount, monthlyInterestRate, months) {
  let monthlyPayment;
  if (monthlyInterestRate === 0) {
    monthlyPayment = loanAmount / Number(months);
  } else {
    monthlyPayment = Number(loanAmount) *
                  (monthlyInterestRate /
                  (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));
  }
  prompt(`${name} your monthly payment is: $${monthlyPayment.toFixed(2)}`);
}

//ASK USER IF THEY WANT TO TRY AGAIN
let question;
function anotherCalculation() {
  prompt(MESSAGES['tryAgain']);
  question = readline.question().toLowerCase();

  while (isValidChoice(question)) {
    prompt(MESSAGES['validChoice']);
    question = readline.question().toLowerCase();
  }

  if (question === 'n' || question === 'no') {
    prompt(MESSAGES['thanks']);
  }
  return question;
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