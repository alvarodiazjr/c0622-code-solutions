/* exported invert */
/*
- make a new object
- look through keys in source.
- assign the keys in source as the value in the new object.
- return new object with inverted values.
*/

function invert(source){
  var inverted = {};
  for(var key in source){
    inverted[source[key]] = key;
  }
  return inverted;
}
