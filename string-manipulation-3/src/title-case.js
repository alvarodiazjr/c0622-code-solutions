/* exported titleCase */
/*
- Hard code all minor characters.
- Make an empty arrray.
- Turn title into an array of strings seperated by spaces.
- loop through array
- make the first letter of array uppercase no matter what.
- If string length is greater than 4 or less than 3 and doesnt include any minor
strings, uppercase first letter and lowercase the rest. and push strings into new array.
- If the string matched one of the minor strings push it into new array with
all letters lowercased.
- If a string is following a colon always capitalize the first letter.
- turn the new array back into a string.
- If the string contains 'Javascript' replace it as 'JavaScript'.
- If the string contains 'Api' replace it as 'API'.
- return the string.
*/
function titleCase(title) {
  var minors = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var array = title.split(' ');
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[0]) {
      newArray.push(array[0].charAt(0).toUpperCase() + array[0].slice(1).toLowerCase());
    } else if ((array[i].length >= 4 || array[i].length <= 3) && !minors.includes(array[i])) {
      newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase());
    } else {
      newArray.push(array[i].charAt(0).toLowerCase() + array[i].slice(1).toLowerCase());
    }
  }
  var final = newArray.join(' ');
  var string = final.replace('Javascript', 'JavaScript');
  var api = string.replace('Api', 'API');
  var complete = [];

  var colonSplit = api.split(': ');

  for (var j = 0; j < colonSplit.length; j++) {
    if (colonSplit[j] === colonSplit[0]) {
      complete.push(colonSplit[j]);
    } else if (!complete.includes(colonSplit[j])) {
      complete.push(colonSplit[1].charAt(0).toUpperCase() + colonSplit[1].slice(1));
    }
  }

  var titleCase = complete.join(': ');
  var finalArray = [];

  var hyphenSplit = titleCase.split('-');

  for (var x = 0; x < hyphenSplit.length; x++) {
    if (hyphenSplit[x] === hyphenSplit[0]) {
      finalArray.push(hyphenSplit[x]);
    } else if (!finalArray.includes(hyphenSplit[x])) {
      finalArray.push(hyphenSplit[1].charAt(0).toUpperCase() + hyphenSplit[1].slice(1));
    }
  }

  var finalString = finalArray.join('-');

  return finalString;
}
