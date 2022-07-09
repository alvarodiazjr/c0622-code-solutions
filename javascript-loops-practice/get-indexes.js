/* exported getIndexes */
function getIndexes(array) {
  var stringArray = [];
  var indexesArray = [];
  for(var i = 0; i < array.length; i++) {
    stringArray.push(array[i]);
    indexesArray.push(stringArray.indexOf(stringArray[i]));
  }
  return indexesArray;
}
