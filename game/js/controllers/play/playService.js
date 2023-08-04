import { Card } from "../../models/card.js";

export class PlayService {
  constructor(controller) {
    this.controller = controller;
  }

  getCards(difficulty, theme) {
    var cards = [];
    var url = `https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/cards/${difficulty}/type/${theme}`;
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.onload = () => {
      if (request.status === 200) {
        var data = JSON.parse(request.response);
        data.cards.forEach((cardData) => {
          var card = new Card(cardData.id, cardData.icon);
          cards.push(card);
        });
      } else {
        console.error("Error requesting cards");
      }
      this.controller.showCards(cards);
    };
    request.send();
  }

  sendScore(score, clicks, time, username) {
    var url = `https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/scores`;

    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.send(
      JSON.stringify({
        score: score,
        clicks: clicks,
        time: time,
        username: username,
      })
    );
  }
}
