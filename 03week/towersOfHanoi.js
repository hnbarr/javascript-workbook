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

// let startStack = [stacks.a, stacks.b, stacks.c];
// let endStack = [stacks.a, stacks.b, stacks.c];
// let blockToMove = startStack[startStack.length -1];

function movePiece(startStack, endStack) {
    stacks[endStack].push(stacks[startStack].pop());
    console.log("Good Move!");
}

function isLegal(startStack, endStack) {
  if((startStack === 'a' || endStack ==='b' || endStack ==='c') && (endStack ==='a' ||endStack === 'b' ||endStack === 'c')){
    if (stacks[startStack][stacks[startStack].length -1] < stacks[endStack][stacks[endStack].length - 1]){
      return true;
      } else if(stacks[endStack][stacks[endStack].length - 1] === undefined){
        return true;
      } else {
        return false
      }
    }
  else {
    return false;
  }
}

function checkForWin() {
  if (stacks.c.length === 4){
    console.log("You won!");
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  if(isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
    checkForWin();
  }
}

// saving for later, in case I need to change stuff. Stuff I took out //
// stacks['a']
// if(startStack == 'a' || 'b' || 'c' ){
// endStack == stacks['a'] || stacks['b'] || stacks['c'];
// let startStack = stacks.startStack.trim().toLowerCase();
// stacks.endStack.push(blockToMove);
// let fom = stacks[startStack].length - 1;
// let to = stacks[startStack].length - 1;
// let from = stacks.startStack.getValue[startStack.length - 1];
// let to = stacks.endStack.getValue[endStack.length - 1];
// let from = stacks.startStack[startStack.length - 1];
// let to = stacks.endStack[endStack.length - 1];

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
