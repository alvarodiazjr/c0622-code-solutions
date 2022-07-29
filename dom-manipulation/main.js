var clicks = 0;

var $hotButton = document.querySelector('.hot-button');

var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', clickCounter);

function clickCounter(event){
  clicks++;
  var temp = null;
  if (clicks < 4) {
    temp = 'cold';
  } else if (clicks < 7) {
    temp = 'cool'
  } else if (clicks < 10) {
    temp = 'tepid'
  } else if (clicks < 13) {
    temp = 'warm'
  } else if (clicks < 16) {
    temp = 'hot'
  } else {
    temp = 'nuclear'
  };
  $hotButton.className = 'hot-button ' + temp;
  $clickCount.textContent = 'Clicks: ' + clicks;
}
