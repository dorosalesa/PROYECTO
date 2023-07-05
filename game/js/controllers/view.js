import { div } from "../libs/html.js";

export class View {
	constructor(controller, parent) {
		this.controller = controller;
		this.parent = parent;
		this.container = div({}, this.parent);
		this.container.style.transform='translateX(300px)'; //'translateX(${window.innerWidth}px)'
		this.show();
	}
	delete() {
		this.parent.removeChild(this.container);
	}

	show() {
		gsap.to(this.container, { x: 0, duration: 1 });
	}

	hide() {
		gsap.to(this.container, { x: 300, duration: 1 });
	}
}
