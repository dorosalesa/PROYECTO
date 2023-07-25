import { View } from "../view.js";
import { div, p } from "../../libs/html.js";

export class PlayView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.id = "playView";
    this.container.className = "playView-elementsContainer";
    this.hudContainer = div(
      { className: "playView-hudContainer" },
      this.container
    );
    this.cardsContainer = div(
      { className: "playView-cardsContainer" },
      this.container
    );
    this.clicksText = p(
      { innerHTML: "Clicks: 0", className: "playView-text" },
      this.hudContainer
    );
    this.timerText = p(
      { innerHTML: "Time: 0", className: "playView-text" },
      this.hudContainer
    );
    this.resetButton = div(
      {
        innerHTML: "Reset",
        className: "playView-reset",
        onclick: this.onResetButton.bind(this),
      },
      this.hudContainer
    );
  }

  showCards(cards) {
    this.cardsContainer.innerHTML = "";
    cards.forEach((card) => {
      let container = div({ className: "card-container" }, this.cardsContainer);
      div({ innerHTML: card.icon, className: "card" }, container);
    });
  }

  onResetButton() {
    this.controller.resetGame();
  }

  updateHUD(clicks, time) {
    this.clicksText.innerHTML = `Clicks: ${clicks}`;
    this.timerText.innerHTML = `Time: ${time}`;
  }
}
