const fs = require('fs');

const randomNum = process.argv[2];
const data = randomNum.toString() + '\n';

fs.writeFile('note.txt', data, err => {
  if (err) throw err;
});
