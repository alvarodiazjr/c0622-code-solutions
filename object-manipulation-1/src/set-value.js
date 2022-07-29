/* exported setValue
- make a new variable that holds the new object.
- change the key into an object key and make the value equal to it.
- return the new variable that holds an object.
*/
function setValue(object, key, value){
  var newObject = object[key] = value;
  return newObject;
}
