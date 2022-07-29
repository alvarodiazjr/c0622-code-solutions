/* exported lastChars */
/*
- check if the string.length is greater than length
- if its longer cut the string from the end to the length number
- check if the string.length is less than length
- if so return the string as normal
*/

function lastChars(length, string) {
  if (string.length > length) {
    return string.slice(-length);
  } else {
    return string;
  }
}
