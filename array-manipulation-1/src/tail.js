/* exported tail
- make an empty item list
- find a way to get rid of first item on list.
- assign items without first item to empty list.
- return the list without the first item.
*/
function tail(array) {
  var tailArr = [];
  for(var i = 1; i < array.length; i++){
    tailArr.push(array[i]);
  }
  return tailArr;
}
