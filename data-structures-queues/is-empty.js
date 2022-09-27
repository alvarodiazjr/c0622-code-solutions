/* exported isEmpty */

function isEmpty(queue) {
  const emptyQueue = queue.peek();
  if (emptyQueue === undefined) {
    return true;
  } else {
    return false;
  }
}
