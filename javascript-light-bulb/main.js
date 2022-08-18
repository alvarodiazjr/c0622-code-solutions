/*
-if the button is clicked change the class from light to dark.
- if the button is clicked again change it from dark to light.
*/

var $button = document.querySelector('.button-color');

var $pageColor = document.querySelector('html');

function lightSwitch() {
  if ($button.className === 'button-color on') {
    $button.className = 'button-color off';
    $pageColor.className = 'html off';
  } else {
    $button.className = 'button-color on';
    $pageColor.className = 'html on';
  }
}

$button.addEventListener('click', lightSwitch);
