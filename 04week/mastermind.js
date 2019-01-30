'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
  var correctLetterLocations = 0;
  var correctLetters = 0;
  
  let solutionArray = solution.split('')
  let guessArray = guess.split('')
    // to compare guess and solution (not working)
   for(let s = 0; s < solutionArray.length; s++ ){
    console.log(solutionArray[s])
      // to get the index of correct letter
    solutionArray.indexOf(solution[s])
      // checking each value in solution array to compare
    for(let g = 0; g < guessArray.length; g++){
      console.log(guessArray[g])
        // checking each value in guess array to compare
    }
    
    if (solutionArray[s] === guessArray[g]){
      correctLetterLocations++
      solutionArray[s] = null
    }
  }
}

function mastermind(guess) {
  // Comment this out to generate a random solution
  solution = 'abcd'; 
  // win condition (working and passing)
  if(guess === solution){
    return 'You guessed it!'
  } else if (board.length === 10){
    return 'You ran out of turns! The solution was ' + solution
  } else {
    return 'Guess again.'
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
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
