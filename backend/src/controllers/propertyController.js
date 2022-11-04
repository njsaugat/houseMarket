// const { prisma } = require('@prisma/client');
const express = require('express');
const router = express.Router();

// import { prisma } from '../utils/prismaClient';
const prisma = require('../utils/prismaClient');
// console.log(prisma);

exports.postProperty = async (req, res) => {
  console.log(req.body);
  const {
    name,
    address,
    description,
    furnished,
    price,
    rent,
    livingRooms,
    bathrooms,
    bedrooms,
  } = req.body.body;

  const newProperty = await prisma.property.create({
    data: {
      name: name,
      location: address,
      description: description,
      furnished: furnished,
      price: price,
      propertyType: rent === true ? 'Rent' : 'Sale',
      livingRoom: livingRooms,
      bathRoom: bathrooms,
      bedRoom: bedrooms,
    },
  });

  if (!req.file) {
    console.log('No file upload');
  } else {
    console.log(req.file.filename);
    const imgsrc = 'http://127.0.0.1:5000/images/' + req.file.filename;
    console.log(imgsrc);
  }
};
