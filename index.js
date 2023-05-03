const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const chefs = require("./data.json")
app.get("/", (req, res) => {
  res.send("Hello bro!");
});
app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const chef = chefs.find((c) => c.id === id);
  res.send(chef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});