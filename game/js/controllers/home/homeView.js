import { div, p } from "../../libs/html.js";
import { View } from "../view.js";

export class HomeView extends View {
	constructor(controller, parent) {
		super(controller, parent);
		this.container.className = "homeView";

		var navigationButton = document.getElementById("navigationButton");
		navigationButton.style.display = "none";

		var loginButton = div(
			{ innerHTML: "Log In", className: "game-button" },
			this.container
		);

		var playButton = div(
			{ innerHTML: "Play", className: "game-button" },
			this.container
		);

		var difficultyButton = div(
			{ innerHTML: "Difficulty", className: "game-button" },
			this.container
		);

		var themesButton = div(
			{ innerHTML: "Themes", className: "game-button" },
			this.container
		);

		var scoresButton = div(
			{ innerHTML: "Scores", className: "game-button" },
			this.container
		);

		var creditsButton = div(
			{ innerHTML: "Credits", className: "game-button" },
			this.container
		);
	}

	onButtonClick(state, event) {
		this.controller.goto(state);
	}
}
