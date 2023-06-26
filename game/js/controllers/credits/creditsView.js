import { View } from "../view.js";

export class CreditsView extends View {
	constructor(controller,parent) {
		super(controller, parent);
		this.container.className='creditsView';

		var title = document.createElement('h3');
		title.innerHTML='Proyecto Juego Memoria';
		this.container.appendChild(title);

		var text = document.createElement('h4');
		text.innerHTML='Creado por: Diana Rosales';
		this.container.appendChild(text);
	}
}
