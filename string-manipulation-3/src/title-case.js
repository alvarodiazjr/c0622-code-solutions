/* exported titleCase */
/*
- Hard code every minor word and put it into array.
- make an empty string to hold all the changes made to the original string.
- Original string is called title.
- split title by its spaces and store it in a variable named stringArr.
- Loop through the stringArr.
- lower case every string in the array.
- if the string includes a hyphen (-)
- split the string by the hyphen.
- then capitalize the first letter and lowercase the rest
on both sides of the hyphen.
- if the string includes the string (api).
- replace it with the hardcoded string (API).
- if the string includes the string (javascript).
- replace it with the hardcoded string (JavaScript).
- if the string is at index[0] or it doesnt include any minor words.
- Capitalize first letter and lowercase the rest.
- Add all changed strings into the empty finalString variable.
- Split the finalString array by a colon(:) and store it in a variable
named stringV2.
- make a variable named newArray and have it store an empty array.
- loop through stringV2.
- if stringV2[index] is equal to 1 then capitalize first letter.
- then push it into newArray.
- if the stringV2 length is equal to 0 push it into newArray with no changes.
- Join the array back into a string by the colon (:) and store it in a variable
named titleCase.
- check with console log if titleCase is giving the correct input.
- return titleCase.
*/

function titleCase(title) {
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  var finalString = '';

  var stringArr = title.split(' ');

  for (var i = 0; i < stringArr.length; i++) {
    var string = stringArr[i].toLowerCase();

    if (string.includes('-')) {
      var words = string.split('-');
      var firstHalf = words[0].charAt(0).toUpperCase() + words[0].slice(1);
      var secondHalf = words[1].charAt(0).toUpperCase() + words[1].slice(1);
      string = firstHalf + '-' + secondHalf;

    } else if (string.includes('api')) {
      string = string.replace('api', 'API');

    } else if (string.includes('javascript')) {
      string = string.replace('javascript', 'JavaScript');

    } else if (!minorWords.includes(string) || i === 0) {
      string = string[0].toUpperCase() + string.slice(1);
    }
    finalString += string + ' ';
  }

  var stringV2 = finalString.trim().split(': ');

  var newArray = [];

  for (var x = 0; x < stringV2.length; x++) {
    if (stringV2[x] === stringV2[1]) {
      newArray.push(stringV2[1].charAt(0).toUpperCase() + stringV2[1].slice(1));
    } else {
      newArray.push(stringV2[x]);
    }
  }
  var titleCase = newArray.join(': ');
  return titleCase;
}
