const prisma = require('../utils/prismaClient');
const bcrypt = require('bcrypt');
// const crypto=require('crypto');
exports.postOwner = async (req, res) => {
  const { name, email, password } = req.body.body;
  //   console.log(typeof name, typeof email, typeof password + '\n');
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const newProperty = await prisma.owner.create({
    data: {
      //   id: '23324',
      name: name,
      username: name,
      email: email,
      password: hashedPassword,
      properties: {},
    },
  });
};

exports.getUser = async (req, res) => {
  const userId = req.params.id;
  const user = await prisma.owner.findUnique({
    where: {
      id: userId,
    },
    // include: {
    //   // properties: true,
    //   // images: true,
    // },
  });

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
