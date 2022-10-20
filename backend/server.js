const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const cors = require('cors');
app.get('/api', (req, res) => {
  // res.send('Hello ');
  res.json([
    { brand: 'Apple' },
    { brand: 'Samsung' },
    { brand: 'RedMi' },
    { brand: 'Lenovo' },
    { brand: 'HP' },
  ]);
});

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/formdata', (req, res) => {
  console.log(req.body);
  res.send('send');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
