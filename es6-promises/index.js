const takeAChance = require('./take-a-chance');

const myName = takeAChance('Alvaro');

myName.then(value => {
  console.log(value);
});

myName.catch(error => {
  console.log(error.message);
});
