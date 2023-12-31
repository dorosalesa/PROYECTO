import {
  DIFFICULTY_HIGH,
  DIFFICULTY_LOW,
  DIFFICULTY_MEDIUM,
} from "../../libs/constants.js";
import { ControllerView } from "../controllerView.js";
import { div } from "../../libs/html.js";

export class DifficultyView extends ControllerView {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "difficultyView";

    div(
      {
        innerHTML: "Low",
        className: "game-button",
        onclick: this.onButtonClick.bind(this, DIFFICULTY_LOW),
      },
      this.container
    );

    div(
      {
        innerHTML: "Medium",
        className: "game-button",
        onclick: this.onButtonClick.bind(this, DIFFICULTY_MEDIUM),
      },
      this.container
    );

    div(
      {
        innerHTML: "High",
        className: "game-button",
        onclick: this.onButtonClick.bind(this, DIFFICULTY_HIGH),
      },
      this.container
    );

    //highButton.classList.add('active');
    //a~adir f() selector difficultad para cambiar active class
  }

  onButtonClick(difficulty) {
    // if (localStorage.getItem("difficulty")) {
    //   this.difficulty = localStorage.getItem("difficulty");
    // }
    var event = new CustomEvent("save-difficulty", {
      detail: {
        difficulty: difficulty,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });
    this.container.dispatchEvent(event);
  }
}
