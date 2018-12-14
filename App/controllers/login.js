const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = async function(req, res, next) {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid Username or Password");

  const vallidPassword = await bcrypt.compare(req.body.password, user.password);
  if (!vallidPassword)
    return res.status(400).send("Invalid Username or Password");
  res.send(true);
};
