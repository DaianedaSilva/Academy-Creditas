"use strict"

function countWords(phrase){
  phrase = phrase.toLowerCase();

  let arrayPhrase = phrase.split(" ")
  let value;

  let check = new Map();
  let word_check;

  for (let word of arrayPhrase){
    word_check = word;

    if (check.has(word_check)){
      value = check.get(word) + 1; 
      check.set(word, value)
    }else{
      check.set(word, 1)
    }
    value = 0;

  }
  return check;

}

let phrase = 'Doo bee doo bee doo'
console.log(countWords(phrase))