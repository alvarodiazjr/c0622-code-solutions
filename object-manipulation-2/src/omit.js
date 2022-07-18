/* exported omit */
/*
- make a new object.
- look through keys in source object
- if source keys do not include keys assign those keys into new object
- return new object.
*/

function omit(source, keys){
  var newObject = {};
  for(var key in source){
    if(!keys.includes(key)){
      newObject[key] = source[key];
    }
  }
  return newObject;
}
