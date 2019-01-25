'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  startStack = startStack.trim().toLowerCase();
  endStack = endStack.trim().toLowerCase();
  // to make all submissions work with tests
  
  let from = stacks[startStack].getValue[startStack.length - 1];
  let to = stacks[endStack].getValue[endStack.length - 1];
  // the last spot in the array, index

  stacks.startStack.pop(from); 
  stacks.endStack.push(to);
  // take away from inital stack & move to new stack
}

function isLegal(startStack, endStack) {
  if (endStack.to < startStack.from){
    console.log("This is NOT a legal move!" + from + " was not moved");
    return false;
  } else {
    console.log("This is a legal move!" + from + " was moved");
    return true;
  }
  // if the destination has a block with value of less than the block were trying to move, it will not allow.
}

function checkForWin() {
  // passing
  if (stacks.c.length === 4){
    console.log("You won!");
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  movePiece(startStack, endStack);
}

// saving for later, in case I need to change stuff //
// stacks['a']
// let lastOfDrag = stacks[startStack].length - 1;
// let lastOfDrop = stacks[startStack].length - 1;

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
