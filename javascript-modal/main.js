var $modal = document.querySelector('.modal');

var $purpleButton = document.querySelector('.purple');

var $pinkButton = document.querySelector('.pink')

$purpleButton.addEventListener('click', function purpleButton(event) {
  $modal.className = 'modal block-display';
});

$pinkButton.addEventListener('click', function pinkButton(event) {
  $modal.className = 'modal display-none';
});
