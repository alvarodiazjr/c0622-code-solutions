/* exported difference */
// make a new array.
// loop through first array and check if second array doesnt include values
// from first array.
// if so push values from first array into new array.
// repeat the process for the second array.
// return the new Array.
function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (!first.includes(second[x])) {
      newArray.push(second[x]);
    }
  }
  return newArray;
}
