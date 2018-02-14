const yargs = require("yargs");
const express = require("express");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon"
);

var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello from express server!");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
