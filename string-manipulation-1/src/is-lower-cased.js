/* exported isLowerCased
- need a way to check if all letters in the word are lowercase.
- if they are all lowercase return the value as true.
- if there's any uppercase letters return the value as false.
*/
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  else {
    return false;
  }
}
