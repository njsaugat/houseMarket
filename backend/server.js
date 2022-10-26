const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const PORT = 5000;
// const fileUpload = require('express-fileupload');

// app.get('/api', (req, res) => {
//   // res.send('Hello ');
//   res.json([
//     { brand: 'Apple' },
//     { brand: 'Samsung' },
//     { brand: 'RedMi' },
//     { brand: 'Lenovo' },
//     { brand: 'HP' },
//   ]);
// });

//middlewares
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(__dirname + '/public'));
// app.use('/uploads', express.static('uploads'));

//use of multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'images/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

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

const upload = multer({ storage: storage });

// app.use(express.static(__dirname + '/public'));
// app.use('/uploads', express.static('uploads'));

app.post('/formdata', upload.single('file'), (req, res) => {
  // app.post('/formdata', (req, res) => {
  // console.log(req.body);
  if (!req.file) {
    console.log('No file upload');
  } else {
    console.log(req.file.filename);
    var imgsrc = 'http://127.0.0.1:3000/images/' + req.file.filename;
  }

  // console.log(req.body.body.data);
  // console.log(req.uploadedImage);
  // res.send('it served');

  // if (req.files === null) {
  //   return res.status(400).json({ msg: 'No file uploaded' });
  // }

  // const file = req.files.uploadedImage;

  // file.mv(`${__dirname}/uploads/${file.name}`, (err) => {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).send(err);
  //   }

  //   res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  // });

  // console.log(res);

  // res.send('send');
  // const { body } = req.body;
  // console.log(body);
  // const formData = JSON.parse(req.body.body);
  // // console.log(formData);q
  // const { imageUrl } = formData;
  // console.log(imageUrl);

  // const file = new File([imageUrl], 'name');
  // console.log(file);
  // getBlob(imageUrl);
});

// app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
