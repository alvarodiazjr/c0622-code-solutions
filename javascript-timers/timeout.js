var $h1 = document.querySelector('h1');

function word () {
  return $h1.textContent = 'Hello There';
}

setTimeout(word, 2000)
