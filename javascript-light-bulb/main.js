/*
- once the click occurs change the two class names.
- once you click the button again it changes back to the original.
*/
var $button = document.querySelector('.button-color');

var $pageColor = document.querySelector('html');

function lightSwitch(event){
  if($button.className === 'button-color light' && $pageColor.className === 'html light'){
    $button.className = 'button-color dark';
    $pageColor.className = 'html dark';
  } else if ($button.className === 'button-color dark' && $pageColor.className === 'html dark'){
    $button.className = 'button-color light';
    $pageColor.className = 'html light';
  }
}

$button.addEventListener('click', lightSwitch);
