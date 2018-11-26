const express = require("express");
const app = express();
const moment = require("moment");
moment().format();

//app.use(express.static("public"));

app.get("/", function(req, res) {
  res.json(moment());
});

app.listen(3000, function() {
  console.log("Node is Running Microservice");
});
