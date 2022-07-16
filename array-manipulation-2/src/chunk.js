/* exported chunk */
/*
- loop through the array and increment till you get to the size number.
- split the array into the size.
- push the split array into a new array.
*/
function chunk(array, size){
  var newArray = [];
  for(var i = 0; i < array.length; i = i + size){
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
