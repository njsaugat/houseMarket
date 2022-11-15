// wiki.js - Wiki route module.

const express = require('express');
const { postLoginInfo } = require('../controllers/loginController');
const {
  postProperty,
  getProperty,
} = require('../controllers/propertyController');
const { postOwner, getUser } = require('../controllers/userController');
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

router.post('/owner', postOwner);

router.post('/login', postLoginInfo);

router.get('/properties', getProperty);

router.get('/user/:id', getUser);

router.get('/register-property', (req, res) => {
  console.log(req.session.isLoggedIn);
  //for this req to be processed, user has to be 1st logged in
  // if previously logged in then req.session.isLoggedIn is set to true;
  // this req has to done after user logs in
  if (req.session.isLoggedIn) {
    res.json({
      loggedIn: true,
      userId: req.session.user.id,
    });
  } else {
    res.json({ loggedIn: false });
  }
  console.log(req.session);
});

module.exports = router;
