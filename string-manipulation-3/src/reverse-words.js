/* exported reverseWords */
// make a var to split the word at every space and reverse each word.
// split that new var again and reverse it so that its in the original order
// of the string.
// retunr the new string.
function reverseWords(word) {
  var reversedWord = word.split('').reverse().join('');
  var finalString = reversedWord.split(' ').reverse().join(' ');
  return finalString;
}
