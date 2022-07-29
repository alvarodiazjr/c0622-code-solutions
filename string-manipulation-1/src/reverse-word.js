/* exported reverseWord
- need a way to reverse the word letter by letter
- have a place to store the reversed words.
- return the reversed word.
*/
function reverseWord(word) {
  var reversedString = '';
  for(var i = word.length - 1; i >= 0; i--) {
    reversedString += word[i];
  }
  return reversedString;
}
