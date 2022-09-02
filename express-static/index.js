const express = require('express');
const path = require('path');
const app = express();

const pathName = path.join(__dirname, 'public');
const pathStatic = express.static(pathName);
app.use(pathStatic);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
