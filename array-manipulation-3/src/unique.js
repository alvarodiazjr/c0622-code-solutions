/* exported unique */
// make a new array.
// loop through given array.
// if new array doesnt include value from given array,
// add it to new array.
// return new array.
function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
