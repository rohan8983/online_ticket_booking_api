const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function() {
  const db = config.get("db");
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => winston.info(`MongoDB connected successfully to ${db}...`));
};
// "mongodb://rohan:rohan123@ds129914.mlab.com:29914/online_booking",
