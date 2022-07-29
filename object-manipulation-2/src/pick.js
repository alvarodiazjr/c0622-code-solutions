/* exported pick */
/*
- make a new object.
- look through keys in source
- if keys includes key in sources add it to new object.
- do not return key if undefined.
 */

function pick(source, keys){
  var newObject = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined){
      newObject[key] = source[key];
    }
  }
  return newObject;
}
