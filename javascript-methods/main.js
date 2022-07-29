var num1 = 3;
var num2 = 35;
var num3 = 52;
var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

var heroes = ['The Batman', 'Spider-Man', 'Ghost Rider', 'Thor'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The Lightning Thief',
    author: 'Rick Riordan'
  },
  {
    title: 'The Titans Curse',
    author: 'Rick Riordan'
  },
  {
    title: 'The Sea of Monsters',
    author: 'Rick Riordan'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Alvaro Diaz';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
