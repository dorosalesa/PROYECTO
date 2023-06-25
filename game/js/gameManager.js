import { MenuController } from "./controllers/menu/menuController.js";
import{DifficultyController} from "./controllers/difficulty/difficultyController.js";
import{ThemesController} from "./controllers/themes/themesController.js";


export class GameManager {
	constructor() {
		var navigationContainer = document.getElementById('navigationContainer');
		this.navigationButton= document.getElementById('navigationButton');
		this.title=document.getElementById('navigationTitle');
		var contentContainer=document.getElementById('contentContainer');
		this.goto(3);
	}
	goto(controllerID){
		switch(controllerID){
			case 1:
				this.title.innerHTML='Menu';
				this.controller=new MenuController(this,contentContainer);
				break;
			case 2:
				this.title.innerHTML='Difficulty';
				this.controller=new DifficultyController(this,contentContainer);
				break;
			case 3:
				this.title.innerHTML='Themes';
				this.controller=new ThemesController(this,contentContainer);
				break;
			default:
				break;
		}
	}
}
