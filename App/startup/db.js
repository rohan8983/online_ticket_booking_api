const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function() {
  mongoose
    .connect(
      "mongodb://localhost:27017/online_booking",
      { useNewUrlParser: true }
    )
    .then(() => winston.info("MongoDB connected successfully..."));
};
// "mongodb://rohan:rohan123@ds129914.mlab.com:29914/online_booking",
