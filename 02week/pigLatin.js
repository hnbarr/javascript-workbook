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
  // PREFIX SECTION NOT WORKING, HELP!
  // to target consonant clusters
  let prefix = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr", "nth", "sch", "scr", "shr", "spl", "spr", "squ", "str", "thr"];
  if (word.startsWith(prefix, 0)){
    word = delete word.prefix;
    answer = word.concat(word(prefix) + "ay");
    return answer;
    // the goal is to delete the prefix (2-3 letters) then add prefix to the end plus "ay".
  } 
   // starts with a vowel
   else if (word.startsWith("a", 0)){
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
    // this is to keep the first letter in place, while adding "ay" to the end.
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
