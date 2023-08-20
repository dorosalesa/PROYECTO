import { THEME_FACES, THEME_FLAGS, THEME_FOOD } from "../../libs/constants.js";
import { ControllerView } from "../controllerView.js";
import { div } from "../../libs/html.js";

export class ThemesView extends ControllerView {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "themesView";

    div(
      {
        innerHTML: "Fruits",
        className: "game-button",
        onclick: this.onButtonClick.bind(this, THEME_FRUITS),
      },
      this.container
    );

    div(
      {
        innerHTML: "Animals",
        className: "game-button",
        onclick: this.onButtonClick.bind(this, THEME_ANIMALS),
      },
      this.container
    );

    div(
      {
        innerHTML: "Shapes",
        className: "game-button",
        onclick: this.onButtonClick.bind(this, THEME_SHAPES),
      },
      this.container
    );

    //highButton.classList.add('active');
    //a~adir f() selector difficultad para cambiar active class
  }

  onButtonClick(theme) {
    var event = new CustomEvent("save-theme", {
      detail: {
        theme: theme,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });
    this.container.dispatchEvent(event);
  }
}
