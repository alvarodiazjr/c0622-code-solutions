/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let firstVal = queue.dequeue();

  if (queue.peek() === undefined) return firstVal;

  while (firstVal > queue.peek()) {
    queue.enqueue(firstVal);
    firstVal = queue.dequeue();
  }
  return firstVal;
}
