const express = require('express');
const data = require('./data.json');
const app = express();

const fs = require('fs');

const notes = data.notes;
let nextId = data.nextId;

app.use(express.json());

app.get('/api/notes', (req, res, next) => {
  const notesArray = [];
  for (const key in notes) {
    const noteObjects = notes[key];
    notesArray.push(noteObjects);
  }
  res.status(200).json(notesArray);
  next();
});

app.get('/api/notes/:id', (req, res) => {
  const num = parseInt(req.params.id, 10);
  if (!Number.isInteger(num)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (notes[num]) {
    res.status(200).json(notes[num]);
  } else {
    res.status(404).json({ error: 'cannot find note with id ' + num });
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    notes[nextId] = req.body;
    notes[nextId].id = nextId;
    res.status(201).json(notes[nextId]);
    nextId++;
  }
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const num = parseInt(req.params.id, 10);
  if (!Number.isInteger(num)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (Number.isInteger(num) && !notes[num]) {
    res.status(404).json({ error: 'cannot find note with id ' + num });
  } else {
    delete notes[num];
    res.sendStatus(204);
  }
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const num = parseInt(req.params.id, 10);
  if (!Number.isInteger(num)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!notes[num]) {
    res.status(404).json({ error: 'cannot find note with id ' + num });
  } else {
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        notes[num] = req.body;
        notes[num].id = num;
        res.status(200).json(notes[num]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
