/* exported toObject
- make an empty list that will hold objects.
- assign the first part of the array to become the key of the object.
- assign the second part of the array to become the value of the key.
- return the list that holds a new object.
*/
function toObject(keyValuePair){
  var obj = {};
  var key = keyValuePair[0];
  obj[key] = keyValuePair[1];
  return obj;
}
