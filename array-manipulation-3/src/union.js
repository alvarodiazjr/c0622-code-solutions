/* exported union */
// make a new array.
// loop through first array and assign values to new array.
// loop through second array.
// if new array doesnt have values from second array assign them to new array.
// return new array.
function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var x = 0; x < second.length; x++) {
    if (!newArray.includes(second[x])) {
      newArray.push(second[x]);
    }
  }
  return newArray;
}
