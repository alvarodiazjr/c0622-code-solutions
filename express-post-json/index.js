const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const key in grades) {
    const objects = grades[key];
    array.push(objects);
  }
  res.json(array);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.status(201).send(grades[nextId]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
