const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create bus schema
const BusSchema = new Schema({
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "agency"
  },
  busNumber: {
    type: String,
    required: true,
    unique: true
  },
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  busType: {
    type: String,
    required: true
  }
});
const Bus = mongoose.model("bus", BusSchema);
module.exports = Bus;
