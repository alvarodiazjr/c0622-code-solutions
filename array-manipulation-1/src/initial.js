/* exported initial
- make an empty item list
- need a way to remove last item on the list.
- assign items without the last items into the empty list.
- return the list without the last item.
*/
function initial(array) {
  var initialArr = [];
  for(var i = 0; i < array.length-1; i++) {
    initialArr.push(array[i]);
  }
  return initialArr;
}
