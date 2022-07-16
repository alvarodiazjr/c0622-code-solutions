/* exported truncate */
/*
- if string.length is greater than length cut the string at length and add '...'
- if string.length is less than or equal to length add '...'
*/

function truncate(length, string){
  if(string.length >= length){
    return string.slice(0, length) + '...';
  } else if(string.length <= length){
    return string + '...';
  }
}
