const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("here");
  res.send("serverjs");
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
