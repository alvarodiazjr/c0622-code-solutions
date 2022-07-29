/* exported isVowel
- make a list of all vowels.
- have something check through the list of vowels.
- need to check if any letters are equal to a vowel.
- if they are equal to a vowel = true.
- if they are not equal to a vowel = false.
*/
function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for(var i = 0; i < vowels.length; i++) {
    if(char.toUpperCase() === vowels[i] || char.toLowerCase() === vowels[i]){
      return true;
    }
  }
  return false;
}
