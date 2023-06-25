import { View } from "../view.js";

export class CreditsView extends View {
	constructor(controller,parent) {
		super(controller, parent);
		this.container.className='creditsView';

		var title = document.createElement('p');
		title.innerHTML='Menu';
		this.container.appendChild(title);

		var text = document.createElement('p');
		text.innerHTML='Menu';
		this.container.appendChild(text);
	}
}
