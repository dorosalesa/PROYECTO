import {
  LOGIN_STATE,
  PLAY_STATE,
  DIFFICULTY_STATE,
  THEMES_STATE,
  SCORES_STATE,
  CREDITS_STATE,
} from "../../libs/constants.js";
import { div, p, img } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class HomeView extends ControllerView {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.id = "homeView";
    this.container.className = "homeView-elementsContainer";

    img(
      { src: "./images/logo.svg", className: "homeView-logo" },
      this.container
    );

    p({ innerHTML: "High Scores", className: "game-text" }, this.container);

    div(
      { innerHTML: "Scores Data", className: "homeView-scores-widget" },
      this.container
    );

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

    var buttonsContainer = div(
      { className: "homeView-buttonsContainer" },
      this.container
    );

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

  onButtonClick(state) {
    //this.controller.goto(state);
    var event = new CustomEvent("home-button-click", {
      detail: {
        state: state,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });

    this.container.dispatchEvent(event);
  }
}
