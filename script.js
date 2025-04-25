'use strict';
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const btnRock = document.querySelector('#rock');
const score = document.querySelector('.score-number');
const main = document.querySelector('.main');
const btnRules = document.querySelector('.btn-rules');
const youPickedPaper = document.querySelector('.paper-1');
const youPickedScissors = document.querySelector('.scissors-1');
const youPickedRock = document.querySelector('.rock-1');
const miniBox = document.querySelector('.mini-box');
const youPickedText = document.querySelector('#you-picke-1');
const youPickedTextTwo = document.querySelector('#you-picke-2');
const computerTime = document.querySelector('.time');
const computerPaper = document.querySelector('.paper-2');
const computerScissors = document.querySelector('.scissors-2');
const computerRock = document.querySelector('.rock-2');
const computerText = document.querySelector('.computer');
const result = document.querySelector('#result');
const btnAgain = document.querySelector('#btn-again');
const modal = document.querySelector('.modal');
const btnOut = document.querySelector('#btn-out');
const background = document.querySelector('.background');

let seconds = 3;
let computerPicked;
let ruka = ['ROCK', 'SCISSORS', 'PAPER'];
let resultScore = '';
let scoreNumber = 0;
let interval;
let playerChoice = '';
let computerChoice = ruka[Math.trunc(Math.random() * 3) + 0];

function chosingWiner() {
  if (playerChoice === 'PAPER' && computerChoice === 'ROCK') {
    resultScore = 'YOU WIN';
    result.textContent = resultScore;
    backgroundColor(youPickedPaper, youPickedRock, youPickedScissors);
  } else if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
    resultScore = 'YOU LOSE';
    result.textContent = resultScore;
    backgroundColor(computerPaper, computerScissors, computerRock);
  } else if (playerChoice === 'PAPER' && computerChoice === 'PAPER') {
    resultScore = 'DRAW';
    result.textContent = resultScore;
  } else if (playerChoice === 'ROCK' && computerChoice === 'PAPER') {
    resultScore = 'YOU LOSE';
    result.textContent = resultScore;
    backgroundColor(computerPaper, computerScissors, computerRock);
  } else if (playerChoice === 'ROCK' && computerChoice === 'ROCK') {
    resultScore = 'DRAW';
    result.textContent = resultScore;
  } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
    resultScore = 'YOU WIN';
    result.textContent = resultScore;
    backgroundColor(youPickedPaper, youPickedRock, youPickedScissors);
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'SCISSORS') {
    resultScore = 'DRAW';
    result.textContent = resultScore;
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
    resultScore = 'YOU WIN';
    result.textContent = resultScore;
    backgroundColor(youPickedPaper, youPickedRock, youPickedScissors);
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
    resultScore = 'YOU LOSE';
    result.textContent = resultScore;
    backgroundColor(computerPaper, computerScissors, computerRock);
  }
}
