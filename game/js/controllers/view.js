import { div } from "../libs/html.js";

export class View {
	constructor(controller, parent) {
		this.controller = controller;
		this.parent = parent;
		this.container = div({}, this.parent);
		this.container.style.transform = "translateX(300px)"; //'translateX(${window.innerWidth}px)'
		this.show();
	}
	delete() {
		this.parent.removeChild(this.container);
	}

	show() {
		gsap.to(this.container, { x: 0, duration: 1 });
	}

	hide(callback, state) {
		this.callback = callback;
		gsap.to(this.container, {
			x: 300,
			duration: 1,
			onComplete: this.hideComplete.bind(this, state),
		});
	}

	hideComplete(state) {
		var event = new CustomEvent('hide-complete',{
			detail: {
			  state: state,
			},
			bubbles: true,
			cancelable: true,
			composed: false,
		  })
		//this.callback(state);
	}
}
