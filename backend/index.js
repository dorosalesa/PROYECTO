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
      var cards = getCards(difficulty);
      cards.forEach((card) => {
        data.cards.push(card);
      });
      cards.forEach((card) => {
        data.cards.push(card);
      });
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

function getIconIndex(iconIndex) {
  let newIconIndex = randomInteger(0, food.length - 1);
  if (iconIndex === newIconIndex) {
    return getIconIndex(iconIndex);
  }
  return newIconIndex;
}

function getCards(difficulty) {
  var cards = [];
  for (let i = 0; i < difficulty; i++) {
    var iconIndex = getIconIndex(-1);
    var card = {
      isDiscovered: false,
      icon: food[iconIndex],
      id: iconIndex,
    };
    cards.push(card);
  }
  console.log(cards);
  return cards;
}

// function getIcons(icons) {
//   var icons = [];

//   var icon = getIcon('');
//   icons.push(icon);
//   return icons;
// }

/*var cards = `
{
  "cards": [
      {
          "isDiscovered": false,
          "icon": "🥜",
          "id": 49
      },
      {
          "isDiscovered": false,
          "icon": "🍏",
          "id": 0
      },
      {
          "isDiscovered": false,
          "icon": "🥝",
          "id": 16
      },
      {
          "isDiscovered": false,
          "icon": "🥝",
          "id": 16
      },
      {
          "isDiscovered": false,
          "icon": "🥭",
          "id": 13
      },
      {
          "isDiscovered": false,
          "icon": "🥭",
          "id": 13
      },
      {
          "isDiscovered": false,
          "icon": "🍉",
          "id": 6
      },
      {
          "isDiscovered": false,
          "icon": "🥒",
          "id": 22
      },
      {
          "isDiscovered": false,
          "icon": "🍹",
          "id": 56
      },
      {
          "isDiscovered": false,
          "icon": "🥜",
          "id": 49
      },
      {
          "isDiscovered": false,
          "icon": "🍹",
          "id": 56
      },
      {
          "isDiscovered": false,
          "icon": "🍏",
          "id": 0
      },
      {
          "isDiscovered": false,
          "icon": "🥎",
          "id": 53
      },
      {
          "isDiscovered": false,
          "icon": "🍉",
          "id": 6
      },
      {
          "isDiscovered": false,
          "icon": "🥎",
          "id": 53
      },
      {
          "isDiscovered": false,
          "icon": "🥒",
          "id": 22
      }
  ]
}
`;*/
