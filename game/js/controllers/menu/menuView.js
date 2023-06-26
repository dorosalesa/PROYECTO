import { View } from "../view.js";

export class MenuView extends View {
	constructor(controller,parent) {
		super(controller, parent);
		this.container.className='menuView';

		var loginButton = document.createElement('div');
		this.container.appendChild(loginButton);
		loginButton.innerHTML='Login';
		loginButton.className='game-button';

		var playButton = document.createElement('div');
		this.container.appendChild(playButton);
		playButton.innerHTML='Play';
		playButton.className='game-button';

		var difficultyButton = document.createElement('div');
		this.container.appendChild(difficultyButton);
		difficultyButton.innerHTML='Difficulty';
		difficultyButton.className='game-button';

		var themesButton = document.createElement('div');
		this.container.appendChild(themesButton);
		themesButton.innerHTML='Themes';
		themesButton.className='game-button';

		var scoresButton = document.createElement('div');
		this.container.appendChild(scoresButton);
		scoresButton.innerHTML='Scores';
		scoresButton.className='game-button';

		var creditsButton = document.createElement('div');
		this.container.appendChild(creditsButton);
		creditsButton.innerHTML='Credits';
		creditsButton.className='game-button';
	}
}
