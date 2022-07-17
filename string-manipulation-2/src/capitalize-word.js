/* exported capitalizeWord */
/*
- if the word is JavaScript it will always return as JavaScript.
- have each word returned with first character capitalized and the rest lowercase.
*/

function capitalizeWord(word){
  if(word.charAt(0) === 'j' || word.charAt(0) === 'J'){
    return 'JavaScript';
  }
  return word.charAt().toUpperCase() + word.slice(1).toLowerCase();
}
