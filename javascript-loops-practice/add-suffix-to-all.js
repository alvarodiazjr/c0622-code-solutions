/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var wordsArr = [];
  for(var i = 0; i < words.length; i++) {
    wordsArr.push(words[i] + suffix);
  }
  return wordsArr;
}
