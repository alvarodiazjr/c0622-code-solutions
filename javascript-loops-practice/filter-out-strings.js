/* exported filterOutStrings */
function filterOutStrings(value) {
  var noStrings = [];
  for(var i = 0; i < value.length; i++){
    if(typeof value[i] !== 'string'){
      noStrings.push(value[i]);
    }
  }
  return noStrings;
}
