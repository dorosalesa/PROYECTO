import { View } from "../view.js";

export class DifficultyView extends View {
	constructor(controller,parent) {
		super(controller, parent);
		this.container.className='difficultyView';

		var lowButton = document.createElement('div');
		this.container.appendChild(lowButton);
		lowButton.innerHTML='Low';
		lowButton.className='game-button';

		var mediumButton = document.createElement('div');
		this.container.appendChild(mediumButton);
		mediumButton.innerHTML='Medium';
		mediumButton.className='game-button';

		var highButton = document.createElement('div');
		this.container.appendChild(highButton);
		highButton.innerHTML='High';
		highButton.className='game-button';
		highButton.classList.add('active'); //a~adir f() selector difficultad para cambiar active class
	}
}
