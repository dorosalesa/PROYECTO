import { View } from "../view.js";
import { div, p } from "../../libs/html.js";

export class PlayView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.id = "playView";
    this.container.className = "playView-elementsContainer";
    this.hubContainer = div(
      { className: "playView-hubContainer" },
      this.container
    );
    this.cardsContainer = div(
      { className: "playView-cardsContainer" },
      this.container
    );
    this.clicksText = p(
      { innerHTML: "Clicks: 0", className: "playView-text" },
      this.hubContainer
    );
    this.timerText = p(
      { innerHTML: "Time: 0", className: "playView-text" },
      this.hubContainer
    );
    this.resetButton = div(
      { innerHTML: "Reset", className: "playView-reset" },
      this.hubContainer
    );
  }

  showCards(cards) {
    this.cardsContainer.innerHTML = "";
    cards.forEach((card) => {
      div({ innerHTML: card.icon, className: "card" }, this.cardsContainer);
    });
  }
}
