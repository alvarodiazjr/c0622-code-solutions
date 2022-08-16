/* exported isAnagram */
// make a new variable for both parameters and sort each one in order.
// remove excess spaces.
// if they equal each other return true or else return false.

function isAnagram(firstString, secondString) {
  var first = firstString.split('').sort().join('');
  var second = secondString.split('').sort().join('');
  if (first.trim() === second.trim()) {
    return true;
  } else {
    return false;
  }
}
