/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  for (let i = 0; i < index; i++) {
    const removedVal = queue.dequeue();
    queue.enqueue(removedVal);
  }
  const value = queue.dequeue();
  return value;
}
