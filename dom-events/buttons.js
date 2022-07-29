var $clickButton = document.querySelector('button.click-button');
$clickButton.addEventListener('click', function handleClick(event){
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
});

var $hoverButton = document.querySelector('button.hover-button');
$hoverButton.addEventListener('mouseover', function handleMouseover(event){
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
});

var $doubleClick = document.querySelector('button.double-click-button');
$doubleClick.addEventListener('dblclick', function handleDoubleClick(event){
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
});
