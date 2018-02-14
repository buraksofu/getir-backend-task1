const yargs = require("yargs");
const express = require("express");
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon"
);

var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello from express server!");
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
