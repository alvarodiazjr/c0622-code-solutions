/*
-if the button is clicked change the class from light to dark.
- if the button is clicked again change it from dark to light.
*/

var $button = document.querySelector('.button-color');

var $pageColor = document.querySelector('html');

var clicks = 0;

$button.addEventListener('click', function (event){
  clicks++;
  if(clicks % 2 !== 0){
    $button.className = 'button-color dark';
    $pageColor.className = 'html dark';
  } else if(clicks % 2 === 0){
    $button.className = 'button-color light';
    $pageColor.className = 'html light';
  }
});
