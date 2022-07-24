/* exported capitalizeWord */
/*
- if the word is JavaScript it will always return as JavaScript.
- have each word returned with first character capitalized and the rest lowercase.
*/

function capitalizeWord(word){
  word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  if(word === 'Javascript'){
    return 'JavaScript';
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
