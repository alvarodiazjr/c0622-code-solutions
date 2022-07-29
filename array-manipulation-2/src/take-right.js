/* exported takeRight */
/*
- make a new array.
- if the count is larger than array length just return the original array.
- grab the elements from the end of the array specified by count number.
- assign the elements into the new array.
*/
function takeRight(array, count){
  var newArray = [];
  if(count > array.length){
    return array;
  }
  newArray = array.slice(-count);
  return newArray;
}
