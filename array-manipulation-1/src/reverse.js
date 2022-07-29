/* exported reverse
- make an empty item list
- find a way to check the items in reverse
- then assign reversed items into the list.
- return the new ;ist
*/
function reverse(array) {
  var reverseArr = [];
  for(var i = array.length - 1; i >= 0; i--){
    reverseArr.push(array[i]);
  }
  return reverseArr;
}
