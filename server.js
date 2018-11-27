const express = require("express");
const app = express();
const moment = require("moment");

app.use(express.static("public"));

app.get("/:query", function(req, res) {
  const urlString = moment.unix(req.params.query);
  const validate = urlString.isValid();
  const naturalDate = moment(urlString).format("MMMM Do YYYY");
  const unixDate = moment(req.params.query, "MMMM D, YYYY").format("X");

  if (validate) {
    res.json({
      unix: req.params.query,
      natural: naturalDate
    });
  } else {
    res.json({
      unix: unixDate,
      natural: req.params.query
    });
  }
  console.log(validate);
});

app.listen(3000, function() {
  console.log("Node is Running Microservice");
});
