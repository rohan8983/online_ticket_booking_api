const router = require("express").Router();
const login = require("../../controllers/login");

//@route   POST api/users/login
//desc     Register user route
//@access  Public
router.post("/login", login);

module.exports = router;
