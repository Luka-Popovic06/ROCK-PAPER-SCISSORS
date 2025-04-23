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

let seconds = 3;
let computerPicked;
let ruka = ['ROCK', 'SCISSORS', 'PAPER'];
let random = ruka[Math.trunc(Math.random() * 3) + 0];
let scores = 0;
let paperValue = 2;
let scissorsValue = 2;
let rockValue = 2;
let rockValuePlayer = 2;
let paperValuePlayer = 2;
let scissorsValuePlayer = 2;
let computerValue;
let playerValue;
let interval;

btnPaper.addEventListener('click', function () {
  hidden();
  youPickedPaper.classList.remove('hidden');
  youPickedText.textContent = 'PAPER';
  interval = setInterval(function () {
    timer();
    if (seconds === 0) {
      clearInterval(interval);
      chosingWiner();
      scoring();
    }
  }, 1000);
  valueOfComputer();
  valueOfPlayer('Paper');
});
btnScissors.addEventListener('click', function () {
  hidden();
  youPickedScissors.classList.remove('hidden');
  youPickedText.textContent = 'SCISSORS';
  interval = setInterval(function () {
    timer();
    if (seconds === 0) {
      clearInterval(interval);
      chosingWiner();
      scoring();
    }
  }, 1000);
  valueOfComputer();
  valueOfPlayer('Scissors');
});
