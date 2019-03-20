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
  let correctLetters = 0; //whitesi
  let solutionArray = solution.split('');
  //this is to make each letter in the combination seperate to compare later!
  let guessArray = guess.split('');
  // ditto

  for(let i = 0; i < 4; i++ ){
    if (solutionArray[i] === guessArray[i]){ // if one or more letters in same spot as solution
      correctLetterLocations++ // this is to generate the number in our hint
      }
    if(guessArray.indexOf(solutionArray[i]) > -1){ // if the matching letters match solution anywhere in array (index of will return positive number if present in array)
        correctLetters++ //this is to show the number in our hint
      }
  }
  console.log(`Hint: ${(colors.red(correctLetterLocations))}-${(colors.white(correctLetters))}`)
  return `${correctLetterLocations}-${correctLetters}`
}

function mastermind(guess) {
  solution = 'abcd' 
  //uncomment above if you want the solution to be abcd for testing!
  counter++ //to keep up with attempts
  console.log(colors.white("Number of guesses: " + counter))
  if(counter >= 10){
    counter = 0
    console.log ('You ran out of turns! The solution was ' + solution)
    solution = ''
    generateSolution()
    return 'You ran out of turns! The solution was ' + solution
  } else if(guess === solution){
    counter = 0
    console.log (colors.magenta('You guessed it!'))
    solution = ''
    generateSolution()
    return "You guessed it!"
  } else {
    console.log (colors.green('Guess again.'))
    return "Guess again."
  }
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
      assert.equal(counter, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-4');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-2');
    });

  });

} else {
  generateSolution();
  getPrompt();
}