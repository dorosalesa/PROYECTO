import { View } from "../view.js";

export class MenuView extends View {
	constructor(controller,parent) {
		super(controller, parent);
		this.controller.className='menuView';

		var title = document.createElement('p');
		title.innerHTML='Menu';
		this.container.appendChild(title);

		var loginButton = document.createElement('div');
		this.container.appendChild(loginButton);
		loginButton.innerHTML='Login';
		loginButton.className='menuView-button';

		var playButton = document.createElement('div');
		this.container.appendChild(playButton);
		playButton.innerHTML='Play';
		playButton.className='menuView-button';
	}
}
