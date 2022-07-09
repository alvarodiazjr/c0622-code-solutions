/* exported filterOutNulls */
/* list of values
return all values except null
figure out a way to remove null from array*/
function filterOutNulls(values) {
  var value = [];
  for(var i = 0; i < values.length; i++) {
    value.push(values[i]);
    var noNull = value.filter(x => x !== null)
  } return noNull;
}
