/* exported flatten */
// make a new array.
// combine an empty array with the given array.
// join all indexes together into one array.
// return new array.
function flatten(array) {
  var flattenedArray = [].concat.apply([], array);
  return flattenedArray;
}
