// const { prisma } = require('@prisma/client');
const express = require('express');
const router = express.Router();

// import { prisma } from '../utils/prismaClient';
const prisma = require('../utils/prismaClient');
// console.log(prisma);

let imagePath;
//if we have multiple images then that would probably be stored in array
// so we have to make the imagePath also to be in array so that we could retrieve them
exports.postProperty = async (req, res) => {
  console.log(req.body);
  // const data = req.body.body;
  // const {
  //   name,
  //   // address,
  //   // description,
  //   // furnished,
  //   // price,
  //   // rent,
  //   // livingRooms,
  //   // bathrooms,
  //   // bedrooms,
  // } = data;
  // const title = req.body.body.name;
  // const address = req.body.body.address;
  // const description = req.body.body.description;
  // const furnished = req.body.body.furnished;
  // const price = req.body.body.price;
  // const rent = req.body.body.rent;
  // const livingRooms = req.body.body.livingRooms;
  // const bathrooms = req.body.body.bathrooms;
  // const bedrooms = req.body.body.bedrooms;

  // console.log(name);

  if (!req.file) {
    console.log('No file upload');
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
      userId,
    } = req.body.body;
    console.log(userId);

    const newProperty = await prisma.property.create({
      data: {
        name: name,
        location: address,
        description: description,
        furnished: furnished,
        price: +price,
        propertyType: rent === true ? 'Rent' : 'Sale',
        livingRoom: +livingRooms,
        bathRoom: +bathrooms,
        bedRoom: +bedrooms,
        // owner: findUser(userId),
        owner: { connect: { id: userId } },
        images: {},
        // ownerId: ' ',
      },
    });

    const newImage = await prisma.image.create({
      data: {
        imageUrl: imagePath,
        property: { connect: { id: newProperty.id } },
      },
    });

    // await prisma.property.update({
    //   where: {
    //     id: newProperty.id,
    //   },
    //   data: {
    //     images: newImage,
    //   },
    // });
  } else {
    console.log(req.file.filename);
    console.log('path is ', req.file.path);
    imagePath = req.file.path;

    // const imgsrc = '/backend/public/images/' + req.file.filename;
    // console.log(imgsrc);
  }
};

async function findUser(userId) {
  const user = await prisma.owner.findMany({
    where: { id: userId },
  });
  return user[0];
}

exports.getProperty = async (req, res) => {
  const properties = await prisma.property.findMany();

  const allProperties = properties.map(async (property) => {
    const image = await prisma.image.findUnique({
      where: {
        propertyId: property.id,
      },
    });
    return { ...property, imageUrl: image.imageUrl };
  });

  res.send(allProperties);
};
