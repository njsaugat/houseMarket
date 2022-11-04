const prisma = require('../utils/prismaClient');

exports.postOwner = async (req, res) => {
  const { name, email, password } = req.body.body;
  //   console.log(typeof name, typeof email, typeof password + '\n');
  const newProperty = await prisma.owner.create({
    data: {
      //   id: '23324',
      name: name,
      username: name,
      email: email,
      password: password,
      properties: {},
    },
  });
};
