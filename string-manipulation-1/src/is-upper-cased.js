/* exported isUpperCased
- need a way to check if all letters in the word are uppercase.
- if they are all uppercase return the value as true.
- if there's any lowercase return the value as false.
*/
function isUpperCased(word) {
  if(word === word.toUpperCase()) {
    return true;
  }
  else {
    return false;
  }
}
