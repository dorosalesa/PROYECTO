import { div, p } from "../../libs/html.js";
import { View } from "../../views/view.js";

export class ScoreView extends View {
  constructor(parent, score) {
    super(parent);
    this.score = score;
    this.container.className = "scoreView";

    var nameContainer = div(
      { className: "scoreView-nameContainer" },
      this.container
    );
    var valuesContainer = div(
      { className: "scoreView-valuesContainer" },
      this.container
    );

    var scoreContainer = div(
      { className: "scoreView-valueContainer" },
      valuesContainer
    );
    var clicksContainer = div(
      { className: "scoreView-valueContainer" },
      valuesContainer
    );
    var timeContainer = div(
      { className: "scoreView-valueContainer" },
      valuesContainer
    );

    p({ innerHTML: this.score.username }, nameContainer);

    p({ innerHTML: "Score" }, scoreContainer);
    p(
      { innerHTML: this.score.score, className: "scoreHighlight" },
      scoreContainer
    );

    p({ innerHTML: "Clicks" }, clicksContainer);
    p(
      { innerHTML: this.score.clicks, className: "scoreHighlight" },
      clicksContainer
    );

    p({ innerHTML: "Time" }, timeContainer);
    p(
      { innerHTML: this.score.time, className: "scoreHighlight" },
      timeContainer
    );
  }
}
