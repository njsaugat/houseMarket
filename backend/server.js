const express = require('express');
const app = express();

const PORT = 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
