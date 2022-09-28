/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const newList = list;
    newList.next = list.next.next;
    return newList;
  }
}
