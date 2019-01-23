'use strict';
console.log("test test, starting homeowrk!");

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // TOP
  board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
  board = [ ['O', 'O', 'O'], [' ', ' ', ' '], [' ', ' ', ' '] ];
  // MIDDLE
  board = [ [' ', ' ', ' '], ['X', 'X', 'X'], [' ', ' ', ' '] ];
  board = [ [' ', ' ', ' '], ['O', 'O', 'O'], [' ', ' ', ' '] ];
  // BOTTOM
  board = [ [' ', ' ', ' '], [' ', ' ', ' '], ['X', 'X', 'X'] ];
  board = [ [' ', ' ', ' '], [' ', ' ', ' '], ['O', 'O', 'O'] ];
}

function verticalWin() {
  // MIDDLES
  board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
  board = [ [' ', 'O', ' '], [' ', 'O', ' '], [' ', 'O', ' '] ];
  // BEGINNING
  board = [ ['X', ' ', ' '], ['X', ' ', ' '], ['X', ' ', ' '] ];
  board = [ ['O', ' ', ' '], ['O', ' ', ' '], ['O', ' ', ' '] ];
  // LAST
  board = [ [' ', ' ', 'X'], [' ', ' ', 'X'], [' ', ' ', 'X'] ];
  board = [ [' ', ' ', 'O'], [' ', ' ', 'O'], [' ', ' ', 'O'] ];
}

function diagonalWin() {
  // LEFT TO RIGHT
  board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
  board = [ ['O', ' ', ' '], [' ', 'O', ' '], [' ', ' ', 'O'] ];
  // RIGHT TO LEFT
  board = [ [' ', ' ', 'X'], [' ', 'X', ' '], ['X', ' ', ' '] ];
  board = [ [' ', ' ', 'O'], [' ', 'O', ' '], ['O', ' ', ' '] ];
}

function checkForWin() {
  horizontalWin();
  verticalWin();
  diagonalWin();
}

function ticTacToe(row, column) {
  // Your code here
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
