/* exported filterOutNulls */
/* list of values
return all values except null
figure out a way to remove null from array*/
function filterOutNulls(values){
  var noNulls = [];
  for(var i = 0; i < values.length; i++){
    if(values[i] !== null){
      noNulls.push(values[i]);
    }
  }
  return noNulls;
}
