import { ControllerView } from "../controllerView.js";
import { input, h3, div } from "../../libs/html.js";

export class LoginView extends ControllerView {
  constructor(controller, parent) {
    super(controller, parent);
    this.container.className = "loginView";

    this.loginDirections = h3(
      { className: "loginDirections", innerHTML: "Enter your username: " },
      this.container
    );

    this.inputText = input(
      { className: "username", placeholder: "Username" },
      this.container
    );

    this.okeyButton = div(
      {
        className: "game-button",
        innerHTML: "Ok",
        onclick: this.onButtonClick.bind(this),
      },
      this.container
    );
  }

  onButtonClick() {
    let username = this.inputText.value;

    if (username !== "") {
      let event = new CustomEvent("username-entered", {
        detail: {
          username: username,
        },
        bubbles: true,
        cancelable: true,
        composed: false,
      });
      this.container.dispatchEvent(event);
    } else {
    }
  }
}
