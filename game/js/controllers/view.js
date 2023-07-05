import { div } from "../libs/html.js";

export class View {
	constructor(controller, parent) {
		this.controller = controller;
		this.parent = parent;
		this.container = div({}, this.parent);
		this.show();
	}
	delete() {
		this.parent.removeChild(this.container);
	}

	show() {
		gsap.to(this.container, { x: 0, duration: 1 });
	}

	hide() {
		gsap.to(this.container, { x: window.innerWidth, duration: 5 });
	}
}
