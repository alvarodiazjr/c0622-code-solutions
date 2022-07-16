/* exported swapChars */
function swapChars(firstIndex, secondIndex, string){
  var newString = '';
  for(var i = 0; i < string.length; i++){
    if(string[i] === string.charAt(firstIndex)){
      newString += string[i] = string.charAt(secondIndex);
    }
  }
  return newString;
}
