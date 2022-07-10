/* exported compact
- make an empty list for truth items.
- make an empty list for false items.
- check all items on the list
- put all false items into the false list
- put all truth items into empty truth list.
- return list with all true items.
*/
function compact(array){
  var compactArr =[];
  var falsy;
  for(var i = 0; i < array.length; i++){
    falsy = Boolean(array[i])
    if(falsy === true){
    compactArr.push(array[i]);
    }
  }
  return compactArr;
}
