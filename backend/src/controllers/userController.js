const prisma = require('../utils/prismaClient');
const bcrypt = require('bcrypt');
// const crypto=require('crypto');
exports.postOwner = async (req, res) => {
  const { firstname, lastname, email, password } = req.body.body;
  //   console.log(typeof name, typeof email, typeof password + '\n');
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const newProperty = await prisma.owner.create({
    data: {
      //   id: '23324',
      name: firstname,
      username: lastname,
      email: email,
      password: hashedPassword,
      properties: {},
    },
  });
};

exports.getUser = async (req, res) => {
  let user;
  if (!req.session.user) {
    const userId = req.params.id;
    user = await prisma.owner.findUnique({
      where: {
        id: userId,
      },
      // include: {
      //   // properties: true,
      //   // images: true,
      // },
    });
  } else {
    user = req.session.user;
  }
  const properties = await prisma.property.findMany({
    where: {
      ownerId: user.id,
    },
    include: {
      images: true,
      // owner: true,
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

  // const allProperties = user.properties.map((property) => {
  //   // const imageUrls=property.images.map(image=>{
  //   //   return image.imageUrl
  //   // })
  //   // return {...property,imageUrls}
  //   const { imageUrl } = property.images[0]; //if many images loop over property.images to get all of them
  //   delete property.images; //not sending the images data; not required
  //   return { ...user, imageUrl };
  // });

  res.send({ ...user, properties: allProperties });
};

exports.getUserPropeties = async (req, res) => {
  console.log(req.session.user.id);
  const userId = req.session.user.id;
  // this.getUser()
  const properties = await prisma.property.findMany({
    where: {
      ownerId: userId,
    },
    include: {
      images: true,
      // owner: true,
    },
  });
  const allProperties = properties.map((property) => {
    const { imageUrl } = property.images[0];
    delete property.images;
    return { ...property, imageUrl };
  });
  res.send({ ...req.session.user, properties: allProperties });
};
