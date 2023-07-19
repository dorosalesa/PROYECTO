import { View } from "../view.js";
import { div } from "../../libs/html.js";

export class PlayView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.id = "playView";
    this.container.className = "playView-elementsContainer";
    this.cardsContainer = div(
      { className: "playView-cardsContainer" },
      this.container
    );
  }

  showCards(cards) {
    this.cardsContainer.innerHTML = "";
    cards.forEach((card) => {
      div({ innerHTML: card.icon, className: "card" }, this.cardsContainer);
    });
  }
}
