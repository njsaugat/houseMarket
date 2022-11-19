const prisma = require('../utils/prismaClient');
const bcrypt = require('bcrypt');
exports.postLoginInfo = async (req, res) => {
  console.log(req.body.body);
  const { email, password } = req.body.body;
  //query the database
  const user = await prisma.owner.findUnique({
    where: {
      // AND: [{ email: email }, { password: password }],
      email: email,
    },
  });
  const passwordMatch = await bcrypt.compare(password, user.password);
  console.log(user);
  if (passwordMatch) {
    req.session.user = user;
    req.session.isLoggedIn = true;
    console.log(req.session);
    res.send({ loggedIn: true });
    return req.session.save((err) => {
      //making sure we save to db and then redirect ie making it async
      if (err) {
        console.log(err);
      }
      // res.redirect('/')
    });
  } else {
    res.send({ loggedIn: false });
  }
  // console.log(user[0].id);
  // res.send(user[0].id);
  // mns;
};

exports.logout = (req, res) => {
  console.log(req.session);
  if (req.session) {
    // more of such error handling
    req.session.destroy((err) => {
      if (err) {
        res.status(400).send('Unable to log out');
      } else {
        res.send('Logout successful');
      }
    });
  }
};
