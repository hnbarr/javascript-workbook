'use strict';

window.onload=function() {
  input();
  pigLatin();
};

// text box and button
function input(){
  let newInput = document.createElement('input');
    newInput.setAttribute("id", 'item-text');
    document.getElementsByClassName('input')[0].after(newInput);
    newInput.setAttribute("placeholder", "Type a single word!");
  let submit = document.createElement('button');
    submit.setAttribute("id", 'button');
    document.getElementById('item-text').after(submit);
    submit.innerHTML = "Translate";
    submit.onclick = pigLatin;
}

function pigLatin(){
  let display = document.getElementById('answer');
  let answer = '';
  let vowel = ["a", "e", "i", "o", "u"];
  let duoPrefix = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr"];
  let trioPrefix = ["nth", "sch", "scr", "shr", "spl", "spr", "squ", "str", "thr"];
  let word = document.getElementById('item-text').value;
  word = word.toLowerCase().trim();
  if(word !== ''){
    for (let i = 0; i <= word.length; i++){
      for(let v = 0; v <= vowel.length; v++){
        if (word[0] == vowel[v]){
          answer = word.concat("yay");
          display.innerHTML = answer;
          return true;
        }
      }
      for(let d = 0; d < duoPrefix.length; d++){
        if ((word[0] + word[1]) == duoPrefix[d]){
          answer = word.substring(2).concat(word[0]+ word[1] + "ay");
          display.innerHTML = answer;
          return true;
        }
      }
      for (let t = 0; t < trioPrefix.length; t++){
        if ((word[0] + word[1] + word[3]) == trioPrefix[t]){
          answer = word.substring(3).concat(word[0]+ word[1]+ word[2] + "ay");
          display.innerHTML = answer;
          return true;
        }
      }
    answer = word.substring(1).concat(word[0] + "ay");
      display.innerHTML = answer;
      return true;
    }
  }
}



