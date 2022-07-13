var $modal = document.querySelector('.modal');

var $purpleButton =document.querySelector('.purple');

var $pinkButton = document.querySelector('.pink')

$purpleButton.addEventListener('click', function purpleButton(event){
  $modal.style.display = 'block';
});

$pinkButton.addEventListener('click', function pinkButton(event){
  $modal.style.display = 'none';
});
