import { View } from "../view.js";
import { input, h3, div } from "../../libs/html.js";

export class LoginView extends View {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "loginView";

    this.loginDirections = h3(
      { className: "loginDirections", innerHTML: "Enter your username: " },
      this.container
    );

    this.inputText = input(
      { className: "username", id: "username", placeholder: "Username" },
      this.container
    );

    this.okeyButton = div(
      { className: "game-button", innerHTML: "Ok" },
      this.container
    );
  }
}
