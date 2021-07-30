const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", function(req, res) {
  res.sendFile("./public/index.html", {root: __dirname });
})

app.get("/v2", function(req, res) {
  res.send("Hi version 2");
})

app.listen(6969);
