/* exported getKeys
- make an empty array.
- check for all keys inside the object.
- assign those keys into the empty array.
- return the array that holds the keys.
*/
function getKeys(object){
  var keys = [];
  for(var key in object){
    keys.push(key);
  }
  return keys;
}
