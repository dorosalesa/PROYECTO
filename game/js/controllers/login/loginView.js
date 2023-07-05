import { View } from "../view.js";

export class LoginView extends View {
	constructor(controller,parent) {
		super(controller, parent);
		this.container.className='loginView';

		this.container.style.transform='translateX(300px)'; //'translateX(${window.innerWidth}px)'

		var loginDirections = document.createElement('h3');
		this.container.appendChild(loginDirections);
		loginDirections.classList.add('loginDirections');
		loginDirections.innerHTML='Enter your username: ';

		var inputText = document.createElement('input');
		this.container.appendChild(inputText);
		inputText.classList.add('username');
		inputText.id='username';

		var okeyButton = document.createElement('div');
		this.container.appendChild(okeyButton);
		okeyButton.innerHTML='Ok';
		okeyButton.className='game-button';

		
	}
}
