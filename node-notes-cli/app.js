const fs = require('fs');
const data = require('./data.json');

const userInput = process.argv.slice(2);

function readNote() {
  for (const key in data.notes) {
    console.log(key + ': ' + data.notes[key]);
  }
}

function addNote() {
  data.notes[data.nextId] = userInput[1];
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

function deleteNote() {
  delete data.notes[userInput[1]];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

function updateNote() {
  data.notes[userInput[1]] = userInput[2];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

if (userInput[0] === 'read') {
  readNote();
} else if (userInput[0] === 'create') {
  addNote();
} else if (userInput[0] === 'delete') {
  deleteNote();
} else if (userInput[0] === 'update') {
  updateNote();
}
