/* exported firstChars */
function firstChars(length, string){
  if(string.length >= length){
    return string.slice(0, length);
  } else if(string.length <= length){
    return string;
  }
}
