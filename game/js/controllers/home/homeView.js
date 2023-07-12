import {
  LOGIN_STATE,
  PLAY_STATE,
  DIFFICULTY_STATE,
  THEMES_STATE,
  SCORES_STATE,
  CREDITS_STATE,
} from "../../libs/constants.js";
import { div, p, img } from "../../libs/html.js";
import { View } from "../view.js";

export class HomeView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "homeView";

    img({src: './images/logo.svg', className: 'homeView-logo'}, this.container);

    p({innerHTML: 'High Scores', className:'game-text'}, this.container);

    div({innerHTML: 'Scores Data', className: 'homeView-scores-widget'},this.container);

    var loginButton = div(
      {
        innerHTML: "Log In",
        className: "game-button",
        onclick: this.onButtonClick.bind(this, LOGIN_STATE),
      },
      this.container
    );

    var playButton = div(
      {
        innerHTML: "Play",
        className: "game-button",
        onclick: this.onButtonClick.bind(this, PLAY_STATE),
      },
      this.container
    );

    var buttonsContainer = div({className: 'homeView-buttonsContainer'}, this.container);

    var difficultyButton = div(
      {
        innerHTML: "Difficulty",
        className: "game-button",
        onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE),
      },
      buttonsContainer
    );

    var themesButton = div(
      {
        innerHTML: "Themes",
        className: "game-button",
        onclick: this.onButtonClick.bind(this, THEMES_STATE),
      },
      buttonsContainer
    );

    var scoresButton = div(
      {
        innerHTML: "Scores",
        className: "game-button",
        onclick: this.onButtonClick.bind(this, SCORES_STATE),
      },
      buttonsContainer
    );

    var creditsButton = div(
      {
        innerHTML: "Credits",
        className: "game-button",
        onclick: this.onButtonClick.bind(this, CREDITS_STATE),
      },
      buttonsContainer
    );
  }

  onButtonClick(state, event) {
    //this.controller.goto(state);
    var event = new CustomEvent("home-button-click", {
      detail: {
        state: state,
        view: this,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });

    this.container.dispatchEvent(event);
  }
}
