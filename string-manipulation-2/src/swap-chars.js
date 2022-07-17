/* exported swapChars */
/*
- access the firstIndex and assign it to the secondIndex
- access the secondIndex and assign it to the firstIndex.
- return the string with their characters swapped.
*/
function swapChars(firstIndex, secondIndex, string){
  return string.substring(0, firstIndex)
  + string[secondIndex]
  + string.substring(firstIndex + 1, secondIndex)
  + string[firstIndex]
  + string.substring(secondIndex + 1);
}
