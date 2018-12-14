const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create agency schema
const AgencySchema = new Schema({
  agencyId: {
    type: String,
    required: true,
    unique: true
  },
  agencyName: {
    type: String,
    required: true
  },
  agencyContact: {
    email: {
      type: String
    },
    phone: {
      type: String
    },
    agencyAddress: {
      type: String
    }
  }
});
const Agency = mongoose.model("agency", AgencySchema);
module.exports = Agency;
