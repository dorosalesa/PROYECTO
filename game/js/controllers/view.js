import {createElement} from "../libs/html.js";

export class View {
	constructor(controller, parent) {
		this.controller = controller;
        this.parent= parent;
		this.container = div({}, this.parent);
	}

	delete (){
		thid.parent.removeChild(this.container);
	}

	show(){
	}

	hide(){

	}
}
