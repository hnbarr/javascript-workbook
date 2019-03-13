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

  for (let i = 0; i <= word.length; i++){
    for(let v = 0; v <= vowel.length; v++){
      if (word[0] == vowel[v]){
        answer = word.concat("yay");
        return answer;
      }
    }
    for(let d = 0; d < duoPrefix.length; d++){
      if ((word[0] + word[1]) == duoPrefix[d]){
        answer = word.substring(2).concat(word[0]+ word[1] + "ay");
        return answer;
      }
    }
    for (let t = 0; t < trioPrefix.length; t++){
      if ((word[0] + word[1] + word[3]) == trioPrefix[t]){
        answer = word.substring(3).concat(word[0]+ word[1]+ word[2] + "ay");
        return answer;
      }
    }
    answer = word.substring(1).concat(word[0] + "ay");
      return answer;
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
