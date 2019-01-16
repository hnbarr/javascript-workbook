'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  let answer = '';
  word = word.toLowerCase().trim();
  let vowel = ["a", "e", "i", "o", "u"];
  let duoPrefix = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr"];
  let trioPrefix = ["nth", "sch", "scr", "shr", "spl", "spr", "squ", "str", "thr"];

//smaller code I want to work
  // non working code below..
  if (word.startsWith(duoPrefix[0], 0)){
    answer = word.substring(2).concat(word[0]+ word[1] + "ay");
    return answer;
    // the goal is to move the prefix (2 letters) then add prefix to the end plus "ay".
  } else if (word.startsWith(trioPrefix[0], 0)){
    answer = word.substring(3).concat(word[0]+ word[1]+ word[2] + "ay");
    return answer;
    // the goal is to move the prefix (3 letters) then add prefix to the end plus "ay".
  }  else if (word.startsWith(vowel[0], 0)){
    answer = word.concat("yay");
    return answer;
    // the goal is to keep the first letter in place, while adding "ay" to the end.
  } else {
    answer = word.substring(1).concat(word[0] + "ay");
    return answer;
    // this is to take the first letter away, then add it to the end of the word plus "ay". WORKS.
  } 


  //larger vowel specific code that works...
  
  if (word.startsWith("a", 0)){
    answer = word.concat("yay");
    return answer;
  } else if (word.startsWith("e", 0)){
    answer = word.concat("yay");
    return answer;
  } else if (word.startsWith("i", 0)){
    answer = word.concat("yay");
    return answer;
  } else if (word.startsWith("o", 0)){
    answer = word.concat("yay");
    return answer;
  } else if (word.startsWith("u", 0)){
    answer = word.concat("yay");
    return answer;
  } 

  // situation-less words
  else {
    answer = word.substring(1).concat(word[0] + "ay");
    return answer;
    // this is to take the first letter away, then add it to the end of the word plus "ay".
  }
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
      assert.equal(pigLatin('apple'), 'appleyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
