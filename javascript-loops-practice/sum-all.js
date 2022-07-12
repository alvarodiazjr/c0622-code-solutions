/* exported sumAll */
// add all numbers in array together//
function sumAll(numbers) {
  var sum = 0;
  for(var i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}
