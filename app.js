const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const query = require("./query");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon"
);

const Schema = new mongoose.Schema({ any: mongoose.Schema.Types.Mixed });
const Record = mongoose.model("Record", Schema);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  res.send("Please send POST request to /searchRecord");
});

app.post("/searchRecord", async (req, res) => {
  try {
    const records = await Record.aggregate(query(req.body));
    res.json({ code: 0, msg: "Success", records });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
