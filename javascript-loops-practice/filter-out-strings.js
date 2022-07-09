/* exported filterOutStrings */
function filterOutStrings(values) {
  var value = [];
  for (var i = 0; i < values.length; i++) {
    value.push(values[i]);
    var noStrings = value.filter(x => typeof x !== 'string')
  } return noStrings;
}
