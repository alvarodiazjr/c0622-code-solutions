/* exported getTail */

function getTail(list) {
  let newList = list;
  let lastVal;
  while (newList !== null) {
    lastVal = newList.data;
    newList = newList.next;
  }
  return lastVal;
}
