import { View } from "../view.js";

export class LoginView extends View {
	constructor(controller,parent) {
		super(controller, parent);
		this.container.className='loginView';

		var okeyButton = document.createElement('div');
		this.container.appendChild(okeyButton);
		okeyButton.innerHTML='Okey';
		okeyButton.className='game-button';
	}
}
