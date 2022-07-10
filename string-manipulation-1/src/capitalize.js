/* exported capitalize
- need to get the first character of the string and uppercase it.
- also need to make sure the rest of the string is lowercase.
- then return the string with the first letter capitalized, and the
rest lowercase.
*/
function capitalize(word) {
  var capital = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capital;
}
