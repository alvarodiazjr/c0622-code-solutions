/* exported getLength */

function getLength(list) {
  let count = 0;
  let newList = list;
  while (newList !== null) {
    newList = newList.next;
    count++;
  }
  return count;
}
