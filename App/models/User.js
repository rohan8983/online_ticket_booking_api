const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: Number,
    required: true,
    maxlength: 12,
    minlength: 10
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
});
const User = mongoose.model("users", UserSchema);
module.exports = User;
