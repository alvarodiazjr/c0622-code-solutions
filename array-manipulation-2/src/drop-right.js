/* exported dropRight */
/*
- make a new array.
- if the count is larger than array length return the original array.
- drop the elements from the end of the array according to count.
- assign and return it to new array.
*/
function dropRight(array, count){
  var newArray = [];
  if (count > array.length) {
    return array;
  }
  newArray = array.slice(0, -count);
  return newArray;
}
