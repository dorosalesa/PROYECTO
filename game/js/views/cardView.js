import { View } from "./view.js";
import { div } from "../libs/html.js";

export class CardView extends View {
  constructor(parent, card) {
    super(parent);
    this.card = card;

    this.container.className = "cardView-container";

    this.iconContainer = div(
      { className: "cardView cardView-hidden" },
      this.container
    );

    this.container.onclick = this.onSelected.bind(this);

    this.container.addEventListener(
      "show-card",
      this.showOnSelected.bind(this)
    );
  }

  onSelected() {
    this.card.isSelected = true;

    var event = new CustomEvent("card-selected", {
      detail: {
        card: this.card,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });

    this.container.dispatchEvent(event);
  }

  showOnSelected() {
    if (this.card.isSelected) {
      this.iconContainer.innerHTML = this.card.icon;
      this.iconContainer.classList.remove("cardView-hidden");
      this.iconContainer.classList.add("cardView-selected");
    }
  }
}
