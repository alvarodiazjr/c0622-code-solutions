 var $contactForm = document.querySelector('#contact-form');

function submitButton(event){
  event.preventDefault();
  var values = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('Message Data:', values);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', submitButton);
