'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


let hand1 = prompt("Pick: Rock, Paper or Scissors");
let hand2 = prompt("Pick: Rock, Paper or Scissors");

function rockPaperScissors(hand1, hand2) {
  if (hand1 === hand2){
    console.log("It's a tie!");
    document.write("It's a tie!");
  } else if (hand1 === "Rock" && hand2 === "Scissors"){
    console.log("Congrats player 1, Rock won!");
    document.write("Congrats player 1, Rock won!");
  } else if (hand1 === "Scissors" && hand2 === "Paper"){
    console.log("Congrats player 1, Scissors won!");
    document.write("Congrats player 1, Scissors won!");
  } else if (hand1 === "Paper" && hand2 === "Rock"){
    console.log("Congrats player 1, Paper won!");
    document.write("Congrats player 1, Paper won!");
  } else if (hand2 === "Rock" && hand1 === "Scissors"){
    console.log("Congrats player 2, Rock won!");
    document.write("Congrats player 2, Rock won!");
  } else if (hand2 === "Scissors" && hand1 === "Paper"){
    console.log("Congrats player 2, Scissors won!");
    document.write("Congrats player 2, Scissors won!");
  } else if (hand2 === "Paper" && hand1 === "Rock"){
    console.log("Congrats player 2, Paper won!");
    document.write("Congrats player 2, Paper won!");
  } 
}

rockPaperScissors(hand1, hand2);


function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // getPrompt();

}
