const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.post('/api/grades', (req, res) => {
  const input = req.body;
  const name = input.name;
  const course = input.course;
  const score = input.score;
  if (score < 0 || score > 100 || Number.isNaN(score)) {
    res.status(400).json({ error: 'Score must be a positive integer between 0 and 100' });
    return;
  }
  if (!name || !course || !score) {
    res.status(400).json({ error: 'Must include Name, Course, and Score.' });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
    returning *
  `;
  const values = [name, course, score];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const input = req.body;
  const name = input.name;
  const course = input.course;
  const score = input.score;
  if (!Number.isInteger(gradeId) || gradeId < 0) {
    res.status(400).json({ error: 'invalid gradeId input' });
    return;
  }
  if (score < 0 || score > 100 || Number.isNaN(score)) {
    res.status(400).json({ error: 'Score must be a positive integer between 0 and 100' });
    return;
  }
  if (!name || !course || !score) {
    res.status(400).json({ error: 'Must include Name, Course, and Score.' });
    return;
  }
  const sql = `
    update "grades"
      set  "name" = $1,
          "course" = $2,
          "score" = $3
    where "gradeId" = $4
    returning *
  `;
  const values = [name, course, score, gradeId];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: 'cannot find grade with gradeId of ' + gradeId });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 0) {
    res.status(400).json({ error: 'invalid gradeId input' });
    return;
  }
  const sql = `
  delete from "grades"
    where "gradeId" = $1
  returning *
  `;
  const value = [gradeId];
  db.query(sql, value)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: 'cannot find grade with gradeId of ' + gradeId });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
