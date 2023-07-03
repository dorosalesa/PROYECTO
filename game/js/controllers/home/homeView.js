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

		var difficultyButton = createElement("div", this.container);
		this.container.appendChild(difficultyButton);
		difficultyButton.innerHTML = "Difficulty";
		difficultyButton.className = "game-button";

		var themesButton = createElement("div", this.container);
		this.container.appendChild(themesButton);
		themesButton.innerHTML = "Themes";
		themesButton.className = "game-button";

		var scoresButton = createElement("div", this.container);
		this.container.appendChild(scoresButton);
		scoresButton.innerHTML = "Scores";
		scoresButton.className = "game-button";

		var creditsButton = createElement("div", this.container);
		this.container.appendChild(creditsButton);
		creditsButton.innerHTML = "Credits";
		creditsButton.className = "game-button";
	}

	onButtonClick(state, event) {
		this.controller.goto(state);
	}
}
