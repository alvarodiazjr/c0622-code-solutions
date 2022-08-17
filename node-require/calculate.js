const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const nodeArray = process.argv.slice(2);
const [num1, operator, num2] = nodeArray;
let newFunction = null;

if (operator === 'plus') {
  newFunction = add;
} else if (operator === 'minus') {
  newFunction = subtract;
} else if (operator === 'times') {
  newFunction = multiply;
} else if (operator === 'over') {
  newFunction = divide;
} else {
  console.log('invalid operation');
}

const value = newFunction(parseInt(num1), parseInt(num2));
console.log(value);
