const express = require("express");
const app = express();
const moment = require("moment");
moment().format();

app.use(express.static("public"));

app.get("/:id", function(req, res) {
  console.log(req.params.id);

  let urlString = JSON.stringify(moment.unix(req.params.id));

  console.log(urlString);
  if (urlString === null) {
    res.json("Good Bye");
  } else {
    res.json(urlString);
  }
});

app.listen(3000, function() {
  console.log("Node is Running Microservice");
});
