const prisma = require('../utils/prismaClient');

exports.postLoginInfo = async (req, res) => {
  console.log(req.body.body);
  const { email, password } = req.body.body;
  //query the database
  const user = await prisma.owner.findMany({
    // where: {
    //   AND: [
    //     {email: email},
    //     {  password:password },
    //   ],
    // },
    where: {
      AND: [{ email: email }, { password: password }],
      // email: email,
    },
  });
  console.log(user[0].id);
  res.send(user[0].id);
  // mns;
};
