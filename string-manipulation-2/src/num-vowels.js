/* exported numVowels */
/*
- list the vowels
- keep a count of the vowels in each string
- loop through vowels and string
- if any vowels or string characters are equal increment the counter
- return the updated count.
*/
function numVowels(string){
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I' , 'o', 'O', 'u', 'U']
  var count = 0;
  for(var i = 0; i < vowels.length; i++){
    for(var x = 0; x < string.length; x++){
      if(vowels[i] === string[x]){
        count++;
      }
    }
  }
  return count;
}
