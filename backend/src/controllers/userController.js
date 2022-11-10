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
