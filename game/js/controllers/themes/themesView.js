import { View } from "../view.js";

export class ThemesView extends View {
	constructor(controller,parent) {
		super(controller, parent);
		this.container.className='themesView';

		var foodButton = document.createElement('div');
		this.container.appendChild(foodButton);
		foodButton.innerHTML='Food';
		foodButton.className='game-button';

		var facesButton = document.createElement('div');
		this.container.appendChild(facesButton);
		facesButton.innerHTML='Faces';
		facesButton.className='game-button';

		var flagsButton = document.createElement('div');
		this.container.appendChild(flagsButton);
		flagsButton.innerHTML='Flags';
		flagsButton.className='game-button';
	}
}
