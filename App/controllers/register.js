const User = require("../models/User");
const bcrypt = require("bcrypt");
const _ = require("lodash");

module.exports = async function(req, res, next) {
  //check existing users
  const user = await User.findOne(_.pick(req.body, ["email"]));
  if (user) {
    return res.status(400).json({ email: "Email already exists" });
  }
  //creating user object with requested data
  const newUser = new User(
    _.pick(req.body, ["username", "email", "mobile", "password", "avatar"])
  );
  //password bcrypt
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, async (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      const user = await newUser.save();
      if (user) res.json(user);
    });
  });
};
