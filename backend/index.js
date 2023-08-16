const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const food = [
  "🍇",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🥭",
  "🍎",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🥝",
  "🍅",
  "🥥",
  "🥑",
];

app.get("/cards/:difficulty/:theme", (req, res) => {
  var cards = [];
  if (req.params !== null) {
    if (req.params.difficulty !== null && req.params.type !== null) {
      const difficulty = req.params.difficulty;
      const type = req.params.type;
    }
  }
  res.send(JSON.stringify.apply(cards));
});

app.get("/scores", (req, res) => {
  res.send("Hello Scores!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
