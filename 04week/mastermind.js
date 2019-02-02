'use strict';
var colors = require('colors');
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let counter = 0;
let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  let correctLetterLocations = 0; //red
  let correctLetters = 0; //white
  let solutionArray = solution.split('')
  let guessArray = guess.split('')

  for(let i = 0; i < 4; i++ ){  
    if (solutionArray[i] === guessArray[i]){ // if one or more letters in guess is a match in solution
      let targetIndex = guessArray.indexOf(solutionArray[i]);
      correctLetterLocations++ 
      solutionArray[i] = null
    if(solutionArray.indexOf([i]) === guessArray.indexOf([i])){ // if the matching letters share same index
      if(targetIndex > -1 ){ // meaning if index is 0+, being in the array
        correctLetters++
        solutionArray.targetIndex = null;
        }
      }
    }
  }
  console.log("Hint: " + (colors.red(correctLetterLocations)) + "-" + (colors.white(correctLetters)))
}

function mastermind(guess) {
  solution = 'abcd'
  counter++
  if(counter >= 10){
    console.log('You ran out of turns! The solution was ' + solution)
  } else if(guess === solution){
    console.log(colors.rainbow('You guessed it!'))
  } else {
    console.log('Guess again.')
  }
  console.log(colors.white("Number of guesses; " + counter))
}


function getPrompt() {
  rl.question('Guess 4 letters that are a-h: ', (guess) => {
    mastermind(guess);
    generateHint(solution, guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}