var $countdown = document.querySelector('h1');


function countdown() {
  var count = $countdown.textContent;
  if (count > 1) {
    count--;
    $countdown.textContent = count;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(count);
  }
}

setInterval(countdown, 1000);
