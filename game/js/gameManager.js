import { MenuController } from "./controllers/menu/menuController.js";

export class GameManager {
	constructor() {
		this.controller=new MenuController(this);
	}
}
