'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  word = word.toLowerCase().trim();

  // starts with a vowel
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
  // every other word
  } else for(i = 0; i < word.length; i++){
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
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
