const router = require("express").Router();
const register = require("../../controllers/register");
const Agency = require("../../models/TravelAgency");
const Bus = require("../../models/Bus");

// //@route   POST api/users/test/agency
// //desc     Tests user route
// //@access  Public
// router.post("/test/agency", async (req, res, next) => {
//   const newAgency = new Agency({
//     agencyId: "TS2222",
//     agencyName: "Orange Travels",
//     agencyContact: {
//       email: "orangetravels@gmail.com",
//       phone: 9876543210,
//       agencyAddress: "Pune"
//     }
//   });
//   const agency = await newAgency.save();
//   res.json(agency);
// });

// //@route   POST api/users/test/bus
// //desc     Tests user route
// //@access  Public
// router.post("/test/bus", async (req, res, next) => {
//   const newBus = new Bus({
//     agency: "5c121d9dbcf51e635b2d0c72",
//     busNumber: "TS09AB1114",
//     source: "SURAT",
//     destination: "MUMBAI",
//     startTime: Date.now(),
//     endTime: Date.now(),
//     busType: "NON-AC SEATER"
//   });
//   const bus = await newBus.save();
//   res.json(bus);
//   // const buses = await Bus.find().populate("agency");
//   // res.json(buses);
// });

//@route   POST api/users/register
//desc     Register user route
//@access  Public
router.post("/register", register);

module.exports = router;
