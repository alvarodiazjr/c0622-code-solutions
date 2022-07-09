/* exported sumAll */
// add all numbers in array together//
function sumAll(numbers) {
  var numbersArr = [];
  var sum = 0;
  for(var i = 0; i < numbers.length; i++) {
    numbersArr.push(numbers[i]);
    sum += numbersArr[i];
  }
  return sum;
}
