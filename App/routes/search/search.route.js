const searchBus = require("../../controllers/search");
const router = require("express").Router();

//@route   GET api/search/
//desc     Search buses route
//@access  Public
router.get("/search", searchBus);

module.exports = router;
