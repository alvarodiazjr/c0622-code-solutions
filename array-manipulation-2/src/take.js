/* exported take */
/*
- make a new array.
- grab the elements in the array specified by the count.
- assign the elements into the new array.
 */
function take(array, count){
  var newArray = [];
  newArray = array.slice(0, count);
  return newArray;
}
