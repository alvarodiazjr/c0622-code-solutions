/* exported intersection */
// make a new array.
// loop through first array and check if second array includes values
// from first array.
// if so push values from first array into new array.
// return new Array.
function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
