/* exported firstChars */
/*
- check if the string.length is greater than length
- if its longer cut the string to the length number
- check if the string.length is less than length
- if so return the string as normal
*/
function firstChars(length, string){
  if(string.length >= length){
    return string.slice(0, length);
  } else if(string.length <= length){
    return string;
  }
}
