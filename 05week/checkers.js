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
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  // Your code here
  createCheckers() {
    let whitePositions = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ] //this creates all the white spots on the borad at start and new game.

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
    ] //this creates the black spots on the board at start and new game.

    for(let i = 0; i < 12; i++){
      let blackRow = blackPositions[i][0];
      let blackColumn = blackPositions[i][1];
      let blackChecker = new Checker('black');
      this.checkers.push(blackChecker);
      this.grid[blackRow][blackColumn] = blackChecker
    }
  }

  killChecker (position) {
   console.log("KILLED")
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
    let startColumn = parseInt(start.charAt(1))
    console.log('startRow:', startRow, 'startColumn:', startColumn)

    let endRow = parseInt(end.charAt(0))
    let endColumn = parseInt(end.charAt(1))
    console.log('endRow:', endRow, 'endColumn:', endColumn)

    this.board.grid[endRow][endColumn] = this.board.grid[startRow][startColumn]; //moves the checker to end
    this.board.grid[startRow][startColumn] = null; //takes away  from first  spot, bc it was moved to end
    
    // jumping an enemy checker.
    if(Math.abs(endRow - startRow) === 2){
      this.board.killChecker();
      let midpointRow = ((startRow + endRow)/2)
      let midpointColumn = ((startColumn + endColumn)/2)
      this.board.grid[midpointRow][midpointColumn] = null //takes away jumped checker
      this.board.checkers.length-- //takes away one value from length.
      console.log(this.board.checkers.length)

///// left off here! Trying to access the symbol/color so I can make win condition. Need to be able to get the length of the last standing color to determine winner.
      let killPoint = [midpointRow, midpointColumn]
      console.log(killPoint)

      let newSpot = this.board.grid[endRow][endColumn]
      console.log(newSpot.symbol === String.fromCharCode(0x125CF)) //true
      // console.log(this.board.checkers)

      // code stops working here..

      let jumpedWhite = 0
      let jumpedBlack = 0
      if(this.board.grid[midpointRow][midpointColumn].symbol === String.fromCharCode(0x125CF)){
        jumpedBlack++ //not working
      } else if(this.board.grid[midpointRow][midpointColumn].symbol === String.fromCharCode(0x125CB)){
        jumpedWhite++ //not working
      }
      console.log(jumpedWhite, jumpedBlack)
    }
    
    // 50-41, 23-32, 41-23 (to test a move)
  }
}


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
