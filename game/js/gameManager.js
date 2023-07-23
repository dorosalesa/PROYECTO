import { HomeController } from "./controllers/home/homeController.js";
import { DifficultyController } from "./controllers/difficulty/difficultyController.js";
import { ThemesController } from "./controllers/themes/themesController.js";
import { ScoresController } from "./controllers/scores/scoresController.js";
import { LoginController } from "./controllers/login/loginController.js";
import { PlayController } from "./controllers/play/playController.js";
import { CreditsController } from "./controllers/credits/creditsController.js";
import {
  HOME_STATE,
  LOGIN_STATE,
  PLAY_STATE,
  DIFFICULTY_STATE,
  THEMES_STATE,
  SCORES_STATE,
  CREDITS_STATE,
  DIFFICULTY_MEDIUM,
  THEME_FOOD,
} from "./libs/constants.js";

export class GameManager {
  constructor() {
    this.difficulty = DIFFICULTY_MEDIUM;
    this.theme = THEME_FOOD;
    this.controller = null;
    this.navigationContainer = document.getElementById("navigationContainer");
    this.navigationButton = document.getElementById("navigationButton");
    this.title = document.getElementById("navigationTitle");
    this.contentContainer = document.getElementById("contentContainer");

    this.navigationButton.onclick = this.goto.bind(this, HOME_STATE);

    this.homeController = new HomeController(this, this.contentContainer);
    this.presenting(HOME_STATE);

    this.contentContainer.addEventListener("home-button-click", (event) => {
      this.presenting(event.detail.state);
    });

    this.contentContainer.addEventListener("hide-complete", (event) => {
      this.presenting(event.detail.state);
    });

    this.contentContainer.addEventListener("save-difficulty", (event) => {
      this.difficulty = event.detail.difficulty;
      this.saveDifficulty();
    });

    this.contentContainer.addEventListener("save-theme", (event) => {
      this.theme = event.detail.theme;
      this.saveTheme();
    });

    this.contentContainer.addEventListener("username-entered", (event) => {
      this.username = event.detail.username;
      this.saveUsername();
      this.presenting(HOME_STATE);
    });

    this.loadDifficulty();
  }

  presenting(state) {
    if (this.controller !== null) {
      this.controller.delete();
      this.controller = null;
    }

    this.navigationButton.classList.remove("hidden");

    switch (state) {
      case HOME_STATE:
        this.navigationButton.classList.add("hidden");
        this.title.innerHTML = "Memory Game";
        // this.controller = new HomeController(this, this.contentContainer);
        break;
      case LOGIN_STATE:
        this.title.innerHTML = "Log In";
        this.controller = new LoginController(this, this.contentContainer);
        break;
      case PLAY_STATE:
        this.title.innerHTML = "Play";
        this.controller = new PlayController(this, this.contentContainer);
        break;
      case DIFFICULTY_STATE:
        this.title.innerHTML = "Difficulty";
        this.controller = new DifficultyController(this, this.contentContainer);
        break;
      case THEMES_STATE:
        this.title.innerHTML = "Themes";
        this.controller = new ThemesController(this, this.contentContainer);
        break;
      case SCORES_STATE:
        this.title.innerHTML = "Scores";
        this.controller = new ScoresController(this, this.contentContainer);
        break;
      case CREDITS_STATE:
        this.title.innerHTML = "Credits";
        this.controller = new CreditsController(this, this.contentContainer);
        break;
      default:
        break;
    }
  }

  goto(state) {
    if (this.controller !== null) {
      this.controller.hide(state);
    } else {
      this.presenting(state);
    }
  }

  loadDifficulty() {
    if (localStorage.getItem("difficulty")) {
      this.difficulty = localStorage.getItem("difficulty");
    }
  }

  saveDifficulty() {
    localStorage.setItem("difficulty", this.difficulty);
  }

  loadTheme() {
    if (localStorage.getItem("theme")) {
      this.theme = localStorage.getItem("theme");
    }
  }

  saveTheme() {
    localStorage.setItem("theme", this.theme);
  }

  saveUsername() {
    localStorage.setItem("username", this.username);
  }
}
