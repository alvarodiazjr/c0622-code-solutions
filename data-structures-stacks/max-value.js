/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let maxNum = stack.pop();
  while (stack.peek() !== undefined) {
    const top = stack.pop();
    if (top > maxNum) {
      maxNum = top;
    }
  }
  return maxNum;
}
