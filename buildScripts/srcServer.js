import express from 'express';
import path from 'path';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on PORT ${port}.\nView here: http://localhost:${port}`);
  }
});
