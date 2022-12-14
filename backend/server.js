const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const router = require('./src/routes/route');
const PORT = process.env.PORT || 5000;
const session = require('express-session');

const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');

//middlewares
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// app.use(express.static(pathphoto-1668155366772.png.join(__dirname, 'public', 'images')));
// console.log(path.join(__dirname, 'public', 'images'));
// app.use(express.static('package.json'));
app.use(express.static('public/images'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
//new request-> assign cookie with sessionId
//if sessionId present -> means old request-> attach the session+ sessionStore with this req
app.use(
  session({
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './public/images/'); // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

// const upload = multer({ storage: storage }).single('file');

//multer as a middleware so it could be used properly
app.use(multer({ storage: storage }).single('photo'));
app.use('/', router);

// app.post('/formdata', (req, res) => {
//   // app.post('/formdata', (req, res) => {
//   console.log(req.body);
//   if (!req.file) {
//     console.log('No file upload');
//   } else {
//     console.log(req.file.filename);
//     const imgsrc = 'http://127.0.0.1:3000/images/' + req.file.filename;
//     console.log(imgsrc);
//   }
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
