var $tabContainer = document.querySelector('.tab-container');

var $tabElements = document.querySelectorAll('.tab');

var $viewElements = document.querySelectorAll('.view');

function tabClick(event){
  if(event.target.matches('.tab') === false){
    return;
  }
  for(var i = 0; i < $tabElements.length; i++){
    if($tabElements[i] === event.target){
      $tabElements[i].className = 'tab active';
    } else {
      $tabElements[i].className = 'tab';
    }
  }
  var dataView = event.target.getAttribute('data-view');
  for(var x = 0; x < $viewElements.length; x++){
    if($viewElements[x].getAttribute('data-view') === dataView){
      $viewElements[x].className = 'view';
    } else {
      $viewElements[x].className = 'view hidden';
    }
  }
}

$tabContainer.addEventListener('click', tabClick);
