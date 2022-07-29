/* exported getValues
- make an empty array.
- check for all keys inside the object.
- assign the values of those keys into the empty array,
- return the array that holds values.
*/
function getValues(object, key) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
