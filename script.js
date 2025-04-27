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
let ruka = ['rock', 'scissors', 'paper'];
let resultScore = '';
let scoreNumber = 0;
let interval;
let playerChoice = '';
let computerChoice = ruka[Math.trunc(Math.random() * 3) + 0];

const btnPlayer = document.querySelectorAll('.btn-player');

btnPlayer.forEach(function (btn) {
  btn.addEventListener('click', function () {
    console.log(btn);
    if (btn.id === ruka[0]) {
      playerChoice = 'ROCK';
      hidden();
      youPickedRock.classList.remove('hidden');
      youPickedText.textContent = 'ROCK';
    } else if (btn.id === ruka[1]) {
      playerChoice = 'SCISSORS';
      hidden();
      youPickedScissors.classList.remove('hidden');
      youPickedText.textContent = 'SCISSORS';
    } else if (btn.id === ruka[2]) {
      playerChoice = 'PAPER';
      hidden();
      youPickedPaper.classList.remove('hidden');
      youPickedText.textContent = 'PAPER';
    }
  });
});

function timer() {
  seconds--;
  computerTime.textContent = seconds;
  if (seconds === 0) {
    if (computerChoice === 'scissors') {
      youPickedTextTwo.textContent = 'SCISSORS';
      computerScissors.classList.remove('hidden');
    } else if (computerChoice === 'paper') {
      computerPaper.classList.remove('hidden');
      youPickedTextTwo.textContent = 'PAPER';
    } else if (computerChoice === 'rock') {
      computerRock.classList.remove('hidden');
      youPickedTextTwo.textContent = 'ROCK';
    }
  }
}

function choosingWiner() {
  if (playerChoice === 'PAPER' && computerChoice === 'rock') {
    resultScore = 'YOU WIN';
    result.textContent = resultScore;
    increaseScore();
    backgroundColor(youPickedPaper, youPickedRock, youPickedScissors);
  } else if (playerChoice === 'PAPER' && computerChoice === 'scissors') {
    resultScore = 'YOU LOSE';
    result.textContent = resultScore;
    reducingScore();
    backgroundColor(computerPaper, computerScissors, computerRock);
  } else if (playerChoice === 'PAPER' && computerChoice === 'paper') {
    resultScore = 'DRAW';
    result.textContent = resultScore;
  } else if (playerChoice === 'ROCK' && computerChoice === 'paper') {
    resultScore = 'YOU LOSE';
    reducingScore();
    result.textContent = resultScore;
    backgroundColor(computerPaper, computerScissors, computerRock);
  } else if (playerChoice === 'ROCK' && computerChoice === 'rock') {
    resultScore = 'DRAW';
    result.textContent = resultScore;
  } else if (playerChoice === 'ROCK' && computerChoice === 'scissors') {
    resultScore = 'YOU WIN';
    increaseScore();
    result.textContent = resultScore;
    backgroundColor(youPickedPaper, youPickedRock, youPickedScissors);
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'scissors') {
    resultScore = 'DRAW';
    result.textContent = resultScore;
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'paper') {
    resultScore = 'YOU WIN';
    increaseScore();
    result.textContent = resultScore;
    backgroundColor(youPickedPaper, youPickedRock, youPickedScissors);
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'rock') {
    resultScore = 'YOU LOSE';
    result.textContent = resultScore;
    reducingScore();
    backgroundColor(computerPaper, computerScissors, computerRock);
  }
}
btnPaper.addEventListener('click', function () {
  interval = setInterval(function () {
    timer();
    if (seconds === 0) {
      clearInterval(interval);
      choosingWiner();
    }
  }, 1000);
});
btnScissors.addEventListener('click', function () {
  interval = setInterval(function () {
    timer();
    if (seconds === 0) {
      clearInterval(interval);
      choosingWiner();
    }
  }, 1000);
});
btnRock.addEventListener('click', function () {
  interval = setInterval(function () {
    timer();
    if (seconds === 0) {
      clearInterval(interval);
      choosingWiner();
    }
  }, 1000);
});
btnRules.addEventListener('click', ruless);
btnOut.addEventListener('click', close);
function ruless() {
  modal.classList.remove('hidden');
  background.classList.remove('hidden');
}
function close() {
  modal.classList.add('hidden');
  background.classList.add('hidden');
}
function hidden() {
  main.classList.add('hidden');
  btnRules.classList.add('hidden');
  miniBox.classList.remove('hidden');
  computerText.classList.remove('hidden');
}
function increaseScore() {
  scoreNumber = scoreNumber + 1;
  score.textContent = scoreNumber;
}
function reducingScore() {
  scoreNumber = scoreNumber - 1;
  score.textContent = scoreNumber;
}
function backgroundColor(btnWinOne, btnWinTwo, btnWinerThree) {
  btnWinOne.style.boxShadow = '0px 0px 20px 20px  #fff';
  btnWinTwo.style.boxShadow = '0px 0px 20px 20px  #fff';
  btnWinerThree.style.boxShadow = '0px 0px 30px 20px  #fff';
}
function backgroundColorRemove(btnWinOne, btnWinTwo, btnWinerThree) {
  btnWinOne.style.boxShadow = 'none';
  btnWinTwo.style.boxShadow = 'none';
  btnWinerThree.style.boxShadow = 'none';
}
btnAgain.addEventListener('click', again);
function again() {
  resultScore = '';
  hiddenAgain();
  computerChoice = ruka[Math.trunc(Math.random() * 3) + 0];
  result.textContent = '...';
  seconds = 4;
  youPickedTextTwo.textContent = '...';
  timer();
  backgroundColorRemove(computerPaper, computerScissors, computerRock);
  backgroundColorRemove(youPickedPaper, youPickedRock, youPickedScissors);
}
function hiddenAgain() {
  main.classList.remove('hidden');
  btnRules.classList.remove('hidden');
  miniBox.classList.add('hidden');
  computerText.classList.add('hidden');
  computerScissors.classList.add('hidden');
  computerRock.classList.add('hidden');
  computerPaper.classList.add('hidden');
  youPickedRock.classList.add('hidden');
  youPickedPaper.classList.add('hidden');
  youPickedScissors.classList.add('hidden');
}
