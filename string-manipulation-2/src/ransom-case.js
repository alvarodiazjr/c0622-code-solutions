/* exported ransomCase */
/*
- make a new string
- loop through the string
- if the index is an even number uppercase it
- if the index is an odd number lowercase it
*/
function ransomCase(string){
  var newString = '';
  for(var i = 0; i < string.length; i++){
    if(i % 2 !== 0){
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
