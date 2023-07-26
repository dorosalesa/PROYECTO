import { View } from "./view.js";
import { div } from "../libs/html.js";

export class CardView extends View {
  constructor(parent, card) {
    super(parent);
    this.card = card;

    this.container.className = "cardView-container";

    div(
      { innerHTML: card.icon, className: "cardView cardView-hidden" },
      this.container
    );
  }
}
