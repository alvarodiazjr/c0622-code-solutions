/* exported oddOrEven
a list of numbers
needs to sort through list and find even or odd numbers.
if the number is even change the number to 'even'
if the number is odd change the number to 'odd'
*/
function oddOrEven(numbers) {
  var oddOrEvenNumbers = [];
  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
      numbers[i] = 'even';
    }
    else if(numbers[i] % 2 !== 0) {
      numbers[i] = 'odd';
    }
    oddOrEvenNumbers.push(numbers[i]);
  }
  return oddOrEvenNumbers;
}
