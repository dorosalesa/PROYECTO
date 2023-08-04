import { ControllerView } from "../controllerView.js";

export class ScoresView extends ControllerView {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "scoresView";
  }

  showScores(scores) {
    this.scores.forEach((score) => {});
  }
}
