const prisma = require('../utils/prismaClient');

exports.postLoginInfo = async (req, res) => {
  console.log(req.body.body);
  const { email, password } = req.body.body;
  //query the database
  const user = await prisma.owner.findOne({
    // where: {
    //   AND: [
    //     {email: email},
    //     {  password:password },
    //   ],
    // },
    where: {
      email: email,
    },
  });
  console.log(user);
};
