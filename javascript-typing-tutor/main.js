/*
- if span[i] === event.key apply the green class, and push the black underline to
the next character.
- if span[i] is not equal apply red class until the span[i] is pressed correctly then
switch to green class.
- once all span elements are green change the all span classes to normal.
*/

var $span = document.querySelectorAll('span');

function typing(event){
  var key = event.key;
  console.log(key);
  for(var i = 0; i < $span.length; i++){
    var letter = $span[i];
    if(letter.textContent === key){
      letter.className = 'green';
    }
  }
}

document.addEventListener('keydown', typing);
