'use strict';
var colors = require('colors')
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Checker {
  constructor(color){
    let w = String.fromCharCode(0x125CB)
    let b = String.fromCharCode(0x125CF)
    color === 'white' ? this.symbol = w : this.symbol = b;
    //made into ternary 
  }
}

class Board {
  constructor() {
    this.grid = []
    this.checkers = []
    this.jumpedBlack = []
    this.jumpedWhite = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // loop to create columns and push null values into each spot on grid/board
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers, for guidance
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      const rowOfCheckers = [row]; // we start with our row number in our array
      for (let column = 0; column < 8; column++) { // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          rowOfCheckers.push(' '); // just push in a blank space
        }
      }
      string += rowOfCheckers.join(' '); // join the rowOfCheckers array to a string, separated by a space
      string += "\n"; // add a 'new line'
    }
    console.log(string);
  }

  createCheckers() {
    let whitePositions = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ] 

    for (let i = 0; i < 12; i++){
      let whiteRow = whitePositions[i][0];
      let whiteColumn = whitePositions[i][1];
      let whiteChecker = new Checker('white');
      this.checkers.push(whiteChecker);
      this.grid[whiteRow][whiteColumn] = whiteChecker;
    }

    let blackPositions = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ] 

    for(let i = 0; i < 12; i++){
      let blackRow = blackPositions[i][0];
      let blackColumn = blackPositions[i][1];
      let blackChecker = new Checker('black');
      this.checkers.push(blackChecker);
      this.grid[blackRow][blackColumn] = blackChecker
    }
  }
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }
  moveChecker(start, end) {
    let startRow = parseInt(start.charAt(0))
    let startColumn = parseInt(start.charAt(1)) // console.log('startRow:', startRow, 'startColumn:', startColumn)
    let endRow = parseInt(end.charAt(0))
    let endColumn = parseInt(end.charAt(1)) // console.log('endRow:', endRow, 'endColumn:', endColumn)
    
    let checkValid = () => {
      if(startRow < 8 && startColumn <8 && endRow < 8 && endColumn <8){
        this.board.grid[endRow][endColumn] = this.board.grid[startRow][startColumn]; //moves the checker & takes away from first spot
        this.board.grid[startRow][startColumn] = null;
    
      if(Math.abs(endRow - startRow) === 2){ // if making a jump...
        console.log("I took away one of your chips!")
        let midpointRow = ((startRow + endRow)/2)
        let midpointColumn = ((startColumn + endColumn)/2)
    
      if(this.board.grid[midpointRow][midpointColumn] !== null){
        if(this.board.grid[midpointRow][midpointColumn].symbol === String.fromCharCode(0x125CB)){
          this.board.jumpedWhite.push(this.board.grid[midpointRow][midpointColumn])
          this.board.grid[midpointRow][midpointColumn] = null //takes away jumped checker
          this.board.checkers.length-- //takes away one value from length.
          console.log(`jumped white chips = ${this.board.jumpedWhite.length}`)
        } else if (this.board.grid[midpointRow][midpointColumn].symbol === String.fromCharCode(0x125CF)){
          this.board.jumpedBlack.push(this.board.grid[midpointRow][midpointColumn])
          this.board.grid[midpointRow][midpointColumn] = null //takes away jumped checker
          this.board.checkers.length-- //takes away one value from length.
          console.log(`jumped black chips = ${this.board.jumpedBlack.length}`)

        } 
        console.log(`total checkers left = ${this.board.checkers.length}`)
        }
      }

      } else {
        console.log('Sorry, please input a valid input like 52 (5 for 5th row & 2 for 2nd column)')
        return false
      }
    } //checkValid
    checkValid()
  }//moveChecker
}//game


function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
        game.moveChecker(whichPiece, toWhere);
        getPrompt();
    });
  });
}

const game = new Game();
game.start();

// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}


//possibly un-needed code
// let jumpedWhite = 0
// let jumpedBlack = 0
// jumpedWhite++ //only adding on first jump, need to fix!
// console.log(`jumped white chips = ${jumpedWhite}`)
// jumpedBlack++ //only adding on first jump, need to fix!
// console.log(`jumped black chips = ${jumpedBlack}`)
// `total black checkers taken; ${jumpedBlack}, total white checkers taken; ${jumpedWhite}`