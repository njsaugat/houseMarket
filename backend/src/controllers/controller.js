// const { prisma } = require('@prisma/client');
const express = require('express');
const router = express.Router();

// import { prisma } from '../utils/prismaClient';
const prisma = require('../utils/prismaClient');
// console.log(prisma);

exports.postProperty = async (req, res) => {
  console.log(req.body);
  if (!req.file) {
    console.log('No file upload');
  } else {
    console.log(req.file.filename);
    const imgsrc = 'http://127.0.0.1:5000/images/' + req.file.filename;
    console.log(imgsrc);
  }
};
