// const { prisma } = require('@prisma/client');
const express = require('express');
const { property } = require('../utils/prismaClient');
const router = express.Router();

// import { prisma } from '../utils/prismaClient';
const prisma = require('../utils/prismaClient');
// console.log(prisma);

let imagePath;
//if we have multiple images then that would probably be stored in array
// so we have to make the imagePath also to be in array so that we could retrieve them
exports.postProperty = async (req, res) => {
  // console.log(req.body);

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

exports.getProperty = async (req, res) => {
  const properties = await prisma.property.findMany({
    include: {
      images: true,
      owner: true,
    },
  });

  const allProperties = properties.map((property) => {
    // const imageUrls=property.images.map(image=>{
    //   return image.imageUrl
    // })
    // return {...property,imageUrls}
    const { imageUrl } = property.images[0]; //if many images loop over property.images to get all of them
    delete property.images; //not sending the images data; not required
    return { ...property, imageUrl };
  });
  console.log(allProperties);

  // res.send(allProperties);
  res.send(allProperties);
  // return properties;
};

exports.putProperty = async (req, res) => {
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
    userId,
    propertyId,
  } = req.body.body;
  const updateProperty = await prisma.property.update({
    where: {
      id: propertyId,
    },
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
      // owner: { connect: { id: userId } },
    },
  });
  console.log(updateProperty);
};

exports.deleteProperty = async (req, res) => {
  const propertyId = req.params.id;
  console.log(propertyId);
  await prisma.property.delete({
    where: {
      id: propertyId,
    },
  });
};
