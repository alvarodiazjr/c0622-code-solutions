/* exported capitalizeWords */
/*
- seperate the words by their space
- uppercase the first letter and lowercase the rest on each word
- join the words back together and return them.
*/
function capitalizeWords(string){
  var array = string.toLowerCase().split(' ');
  for(var i = 0; i < array.length; i++){
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  return array.join(' ');
}
