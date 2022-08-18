const fs = require('fs');

const randomNum = Math.floor(Math.random() * 10).toString() + '\n';

fs.writeFile('random.txt', randomNum, err => {
  if (err) throw err;
});
