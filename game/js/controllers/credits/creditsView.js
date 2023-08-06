import { ControllerView } from "../controllerView.js";
import { h3, h4 } from "../../libs/html.js";

export class CreditsView extends ControllerView {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "creditsView";

    h3(
      {
        innerHTML: "Programación Web Orientada a Objetos",
        className: "creditsView-h3",
      },
      this.container
    );

    h3(
      { innerHTML: "Proyecto: Juego Memoria", className: "creditsView-h3" },
      this.container
    );

    h4(
      { innerHTML: "Creado por: Diana Rosales", className: "creditsView-h4" },
      this.container
    );

    h4(
      { innerHTML: "Cenfotec 2023", className: "creditsView-h4" },
      this.container
    );
  }
}
