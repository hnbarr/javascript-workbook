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
  // Your code here
  let data = stacks.startStack.pop();
  stacks.endStack.push(data);
}

function isLegal(startStack, endStack) {
  // let lastOfDrag = stacks[startStack].length - 1;
  // let lastOfDrop = stacks[startStack].length - 1;

  if (endStack > startStack){
    console.log("This is NOT a legal move!" + data + " was not moved");
    return false;
  } else {
    console.log("This is a legal move!" + data + " was moved");
    return true;
  }

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
  // stacks['a']
  if (!isLegal(startStack, endStack)){
    console.log("Try again, not a legal move!");
    return false;
  } else {
    return true;
  }

}

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
