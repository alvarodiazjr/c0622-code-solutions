/* exported isPalindromic */
// store new string that removes spaces from string.
// store new string that makes it into an array and reverses it.
// put array back into string and remove spaces.
// if both new strings are equal return true or else return false.

function isPalindromic(string) {
  var stringArr = string.replace(' ', '');
  var reversedString = string.split('').reverse().join('').replace(' ', '');
  if (stringArr === reversedString) {
    return true;
  } else {
    return false;
  }
}
