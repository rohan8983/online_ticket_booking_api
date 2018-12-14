const express = require("express");
const app = express();
const winston = require("winston");

//error module
require("./startup/logging")();
//MongoDB connectivity
require("./startup/db")();
//configs
require("./startup/config")(app);
//routes
require("./startup/indexRoutes")(app);

//initial default route
app.get("/", (req, res) => res.sendFile(__dirname + "/" + "index.htm"));

const port = process.env.PORT || 4000;

app.listen(port, () => winston.info(`server is running on ${port}...`));
