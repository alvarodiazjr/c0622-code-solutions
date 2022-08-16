/* exported zip */
/*
- make a array called zipArray to hold zipped arrays
- make an array called removed to hold excess values if the arrays arent equal in size.
- get the shortest array length between the two and store it in a variable.
- loop throught the shortest array.
- push the values at i of each array into removed array.
- then push removed into zipArray.
- return zipArray.
 */
function zip(first, second) {
  var zipArray = [];
  var removed = [];
  var arrLength = Math.min(first.length, second.length);
  for (var i = 0; i < arrLength; i++) {
    removed.push(first[i], second[i]);
    zipArray.push(removed);
    removed = [];
  }
  return zipArray;
}
