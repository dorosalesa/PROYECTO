const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getIconIndex(iconIndex, iconList) {
  let newIconIndex = randomInteger(0, iconList.length - 1);
  if (iconIndex === newIconIndex) {
    return getIconIndex(iconIndex, iconList);
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
  for (let i = 0; i < difficulty; i++) {
    var iconIndex = getIconIndex(-1, iconList);
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
