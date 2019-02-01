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
  // to compare guess and solution (not working)
  var correctLetterLocations = 0; //red
  var correctLetters = 0; //white
  let solutionArray = solution.split('') //test is saying split is undefinded.. here and lines 104/107
  let guessArray = guess.split('')

  for(let s = 0; s < solutionArray.length; s++ ){ 
    console.log(solutionArray[s]) // will return the letter of each index
    solutionArray.indexOf(solution[s]) //to get the index of correct letter  
    
    for(let g = 0; g < guessArray.length; g++){ 
      console.log(guessArray[g]) // will return the letter of each index
      
      if (solutionArray[s] === guessArray[g]){ // if the letter in solution equals the letter in guess
        correctLetterLocations++ // to increment the value of variable
        solutionArray[s] = null
         
        if(solutionArray.indexOf([s]) === guessArray.indexOf([g])){ // if the matching letters share same index
          console.log(solutionArray.indexOf([s]) + guessArray.indexOf([g])) // returns the index of matching letters
          var targetIndex = solutionArray.indexOf([s]);
          
          if(targetIndex > -1 ){ // meaning if index is 0+, being in the array
            correctLetters++ // to increment the value of variable
            solutionArray.targetIndex = null;
          }
        }
      }
    }
  }
  return((colors.red(correctLetterLocations)) + "-" + (colors.white(correctLetters)))
}

function mastermind(guess) {
  counter++
  if(guess === solution){
    return 'You guessed it!'
  } else if(counter >= 10){
    console.log( 'You ran out of turns! The solution was ' + solution)
    // change to return
  } else {
    for(let x = 0; x < letters.length; x++){
      for(let y = 0; y < guess.length; y++){
        let guessArray = guess.split('')
        if(letters.indexOf(guessArray[y]) >= 0){
          console.log(counter)
          console.log("All valid letters, but nothing was a match!")
          return true
        } else {
          console.log("one or more letters in your guess is not valid")
          return false;
        }
      } 
    }
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
