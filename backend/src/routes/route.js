// wiki.js - Wiki route module.

const express = require('express');
const { postProperty } = require('../controllers/controller');
const router = express.Router();
// const postProperty=
// Home page route.
// router.get("/", function (req, res) {
//   res.send("Wiki home page");
// });

// // About page route.
// router.get("/about", function (req, res) {
//   res.send("About this wiki");
// });

router.post('/formdata', postProperty);

module.exports = router;
