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
} from "./libs/constants.js";

export class GameManager {
	constructor() {
		this.controller = null;
		this.navigationContainer = document.getElementById("navigationContainer");
		this.navigationButton = document.getElementById("navigationButton");
		this.title = document.getElementById("navigationTitle");
		this.contentContainer = document.getElementById("contentContainer");
		this.goto(HOME_STATE);

		this.navigationButton.onclick=this.goto.bind(this, HOME_STATE);
	}
	goto(state) {
		if (this.controller !== null) {
			this.controller.delete();
		}

		this.navigationButton.classList.remove('hidden');

		switch (state) {
			case HOME_STATE:
				this.navigationButton.classList.add('hidden');
				this.title.innerHTML = "Memory Game";
				this.controller = new HomeController(this, this.contentContainer);
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
}
