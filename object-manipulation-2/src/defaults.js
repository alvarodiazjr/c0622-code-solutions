/* exported defaults */
/*
- look through all keys in source
- compare if source already has the key and if target does not have the key.
- if so assign the source key to the target object.
*/

function defaults(target, source){
  for(var key in source){
    if(source.hasOwnProperty(key) && !target.hasOwnProperty(key)){
      target[key] = source[key];
    }
  }
}
