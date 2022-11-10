const prisma = require('../utils/prismaClient');

exports.postLoginInfo = async (req, res) => {
  console.log(req.body.body);
  const { email, password } = req.body.body;
  //query the database
  const user = await prisma.owner.findMany({
    where: {
      AND: [{ email: email }, { password: password }],
    },
  });
  console.log(user);
  if (user) {
    req.session.user = user[0];
    req.session.isLoggedIn = true;
    console.log(req.session);
    return req.session.save((err) => {
      //making sure we save to db and then redirect ie making it async
      if (err) {
        console.log(err);
      }
      // res.redirect('/')
    });
  }
  // console.log(user[0].id);
  // res.send(user[0].id);
  // mns;
};
