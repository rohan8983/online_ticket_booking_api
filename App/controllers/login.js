const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = async function(req, res, next) {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid Username or Password");

  //validating password with
  const vallidPassword = await bcrypt.compare(req.body.password, user.password);
  if (!vallidPassword)
    return res.status(400).send("Invalid Username or Password");

  //genrating token
  const token = jwt.sign({ _id: user._id }, "onlineBooking_jwtPrivateKey");
  res.status(200).send({ status: true, token });
};
