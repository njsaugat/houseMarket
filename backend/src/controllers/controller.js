const express = require('express');
const router = express.Router();
// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
});
// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
});

module.exports = router;

const wiki = require('./wiki.js');
// …
app.use('/wiki', wiki);

router.get('/about', function (req, res) {
  res.send('About this wiki');
});
router.get('/about', function (req, res) {
  res.send('About this wiki');
});
