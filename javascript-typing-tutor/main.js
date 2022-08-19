var $spanKeys = document.querySelectorAll('span');
var index = 0;
var nextKey = $spanKeys[index];

function keyPress(event) {
  var spaceKey = nextKey.textContent.charCodeAt(0) === 160;
  if ((event.key === nextKey.textContent) || (event.key === ' ' && spaceKey)) {
    nextKey.className = 'green';
    index++;
    if (index < $spanKeys.length) {
      nextKey = $spanKeys[index];
      nextKey.className = 'black-underline';
    }
  } else {
    nextKey.className = 'red';
  }
}

document.addEventListener('keydown', keyPress);
