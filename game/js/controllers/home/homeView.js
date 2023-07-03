import {
	LOGIN_STATE,
	PLAY_STATE,
	DIFFICULTY_STATE,
	THEMES_STATE,
	SCORES_STATE,
	CREDITS_STATE,
} from "../../libs/constants.js";
import { div, p } from "../../libs/html.js";
import { View } from "../view.js";

export class HomeView extends View {
	constructor(controller, parent) {
		super(controller, parent);
		this.container.className = "homeView";

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

		var difficultyButton = div(
			{
				innerHTML: "Difficulty",
				className: "game-button",
				onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE),
			},
			this.container
		);

		var themesButton = div(
			{
				innerHTML: "Themes",
				className: "game-button",
				onclick: this.onButtonClick.bind(this, THEMES_STATE),
			},
			this.container
		);

		var scoresButton = div(
			{
				innerHTML: "Scores",
				className: "game-button",
				onclick: this.onButtonClick.bind(this, SCORES_STATE),
			},
			this.container
		);

		var creditsButton = div(
			{
				innerHTML: "Credits",
				className: "game-button",
				onclick: this.onButtonClick.bind(this, CREDITS_STATE),
			},
			this.container
		);
	}

	onButtonClick(state, event) {
		this.controller.goto(state);
	}
}
