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

// Handle Author create on POST.
exports.author_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET.
exports.author_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
exports.author_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update POST');
};

const BookInstance = require('../models/bookinstance');

// Display list of all BookInstances.
exports.bookinstance_list = (req, res) => {
  res.send('NOT IMPLEMENTED: BookInstance list');
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: BookInstance create POST');
};
