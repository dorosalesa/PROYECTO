const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const dbUrl = "https://memorygame-67ac9-default-rtdb.firebaseio.com/";

const fruits = [
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

const animals = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐻",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
];

const shapes = [
  "❤️",
  "🧡",
  "💛",
  "💚",
  "💙",
  "🔴",
  "🟠",
  "🟡",
  "🟢",
  "🟣",
  "🔶",
  "🔷",
  "🟥",
  "🟨",
  "🟩",
  "🟦",
];

app.get("/cards/:difficulty/:theme", (request, response) => {
  var data = { cards: [] };
  if (request.params !== null) {
    if (request.params.difficulty !== null && request.params.theme !== null) {
      const difficulty = request.params.difficulty;
      const theme = request.params.theme;
      var cards = getCards(difficulty, theme);
      cards.forEach((card) => {
        data.cards.push(card);
      });
      cards.forEach((card) => {
        data.cards.push(card);
      });

      shuffleArray(data.cards);
    }
  }
  response.send(JSON.stringify(data));
});

app.get("/scores", (request, response) => {
  response.send("Hello Scores!");
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getIconIndex(iconIndex, length, cards) {
  let newIconIndex = randomInteger(0, length - 1);

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    if (card.id === newIconIndex) {
      return getIconIndex(iconIndex, length, cards);
    }
  }

  if (iconIndex === newIconIndex) {
    return getIconIndex(iconIndex, length, cards);
  }

  return newIconIndex;
}

function getCards(difficulty, theme) {
  var cards = [];

  var iconList = null;

  switch (theme) {
    case "fruits":
      iconList = fruits;
      break;
    case "animals":
      iconList = animals;
      break;
    case "shapes":
      iconList = shapes;
      break;
    default:
      iconList = fruits;
      break;
  }
  for (let i = 0; i < dificulty; i++) {
    var iconIndex = getIconIndex(-1, iconList.length, cards);
    var card = {
      isDiscovered: false,
      icon: iconList[iconIndex],
      id: iconIndex,
    };
    cards.push(card);
  }
  console.log(cards);
  return cards;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

module.exports = app;

app.get("/", (req, res) => {
  res.send("Api Funcionando");
});
