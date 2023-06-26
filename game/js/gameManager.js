import { MenuController } from "./controllers/menu/menuController.js";
import { DifficultyController } from "./controllers/difficulty/difficultyController.js";
import { ThemesController } from "./controllers/themes/themesController.js";
import { ScoresController } from "./controllers/scores/scoresController.js";
import { LoginController } from "./controllers/login/loginController.js";
import { PlayController } from "./controllers/play/playController.js";
import {CreditsController} from "./controllers/credits/creditsController.js";

export class GameManager {
	constructor() {
		var navigationContainer = document.getElementById("navigationContainer");
		this.navigationButton = document.getElementById("navigationButton");
		this.title = document.getElementById("navigationTitle");
		var contentContainer = document.getElementById("contentContainer");
		this.goto(2);
	}
	goto(controllerID) {
		switch (controllerID) {
			case 1:
				this.title.innerHTML = "Menu";
				this.controller = new MenuController(this, contentContainer);
				break;
			case 2:
				this.title.innerHTML = "Log In";
				this.controller = new LoginController(this, contentContainer);
				break;
			case 3:
				this.title.innerHTML = "Play";
				this.controller = new PlayController(this, contentContainer);
				break;
			case 4:
				this.title.innerHTML = "Difficulty";
				this.controller = new DifficultyController(this, contentContainer);
				break;
			case 5:
				this.title.innerHTML = "Themes";
				this.controller = new ThemesController(this, contentContainer);
				break;
			case 6:
				this.title.innerHTML = "Scores";
				this.controller = new ScoresController(this, contentContainer);
				break;
			case 7:
				this.title.innerHTML = "Credits";
				this.controller = new CreditsController(this, contentContainer);
				break;
			default:
				break;
		}
	}
}
