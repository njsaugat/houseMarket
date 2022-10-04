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

router.post('/about', (req, res) => {
  res.send('About this wiki');
});
const Author = require('../models/author');

// Display list of all Authors.
exports.author_list = (req, res) => {
  res.send('NOT IMPLEMENTED: Author list');
};
// Display detail page for a specific Author.
exports.author_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};
// Display Author create form on GET.
exports.author_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author create GET');
};
