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
    stacks[endStack].push(stacks[startStack].pop());
    console.log("Good Move!");
    // this moves the last block from the startstack to the endstack!
}

function isLegal(startStack, endStack) {
  if((startStack === 'a' || startStack === 'b' || startStack === 'c') && (endStack === 'a' ||endStack === 'b' ||endStack === 'c')){
    if (stacks[startStack][stacks[startStack].length -1] < stacks[endStack][stacks[endStack].length - 1]){
      return true;
      // this will be a legal move if; the last block on startstack is smaller than the last block on endstack
      } else if(stacks[endStack][stacks[endStack].length - 1] === undefined){
        return true;
        // because if the row is empty its undefined, can not compare undefined to a number.
      } else {
        console.log("Sorry, move not allowed.");
        return false
        // not legal due to rule above.
      }
    }
  else {
    console.log("Sorry, entry not accepted. Please choose a, b or c.");
    return false;
    // claims that you have not selected a supported choice.
  }
}

function checkForWin() {
  if (stacks.c.length === 4){
    console.log("You won!");
    return true;
  } else {
    return false;
  }
  // To win the game, the last stack will be full!
}

function towersOfHanoi(startStack, endStack) {
  // did if statement so that game will run in proper order. If move is legal, then make move and check for win. :)
  if(isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
    checkForWin();
  }
  restart()
}

function restart(){
  if (checkForWin()){
    // restart game
    console.log("Let's restart and play again!")
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    }
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