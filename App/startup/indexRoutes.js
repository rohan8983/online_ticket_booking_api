const error = require("../middleware/error");
const userRegister = require("../routes/auth/users");
const loginUser = require("../routes/auth/login");

module.exports = function(app) {
  //use routes
  app.use("/api/users", userRegister);
  app.use("/api/users", loginUser);
  //error handling for every route
  app.use(error);
};
