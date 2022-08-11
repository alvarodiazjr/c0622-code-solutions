/* exported equal */
// if the length of both arrays arent equal return false.
// loop through first array.
// if any index of first array doesnt match up with second array
// return false.
// or else return true.
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
