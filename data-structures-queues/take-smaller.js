/* exported takeSmaller */

function takeSmaller(queue) {
  const firstVal = queue.dequeue();
  if (firstVal === undefined) return;
  const secondVal = queue.dequeue();
  if (secondVal === undefined) return firstVal;
  if (firstVal < secondVal) {
    queue.enqueue(secondVal);
    return firstVal;
  }
  if (firstVal > secondVal || firstVal === secondVal) {
    queue.enqueue(firstVal);
    return secondVal;
  }
}
