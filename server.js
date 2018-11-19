const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const moment = require("moment");
moment().format();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/", function(req, res) {
  //add request
});

app.listen(3000, function() {
  console.log("Node is Running on port 3000");
});
