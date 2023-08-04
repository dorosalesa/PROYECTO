import { div, p } from "../../libs/html.js";
import { View } from "../../views/view.js";

export class ScoreView extends View {
  constructor(parent, score) {
    super(parent);
    this.score = score;

    var nameContainer = div({ className: "nameContainer" }, this.container);
    div({ className: "valuesContainer" }, this.container);

    p({ innerHTML: this.score.username }, nameContainer);
  }
}
