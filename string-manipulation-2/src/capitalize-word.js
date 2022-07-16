/* exported capitalizeWord */
/*
- if the word is JavaScript it will always return as JavaScript.
- have each word returned with first character capitalized and the rest lowercase.
*/

function capitalizeWord(word){
  if(word == 'javascript'){
    return 'JavaScript';
  }
  return word.charAt().toUpperCase() + word.slice(1).toLowerCase();
}
