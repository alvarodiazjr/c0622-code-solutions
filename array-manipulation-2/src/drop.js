/* exported drop */
/*
- make a new array.
- grab the elements in the array after the count number.
- assign the elements into the new array.
 */
function drop(array, count){
  var newArray = [];
  newArray = array.slice(count);
  return newArray;
}
