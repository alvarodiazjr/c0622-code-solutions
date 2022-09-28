/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const newList = list;
    const firstVal = list.data;
    const secondVal = list.next.data;
    newList.data = secondVal;
    newList.next.data = firstVal;
    return newList;
  } else {
    return list;
  }
}
