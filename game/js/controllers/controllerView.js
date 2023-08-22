import { View } from "../views/view.js";

export class ControllerView extends View {
  constructor(controller, parent) {
    super(parent);
    this.controller = controller;

    this.container.style.transform = "translateX(${window.innerWidth}px)";
    this.show();
  }

  delete() {
    this.parent.removeChild(this.container);
  }

  show() {
    gsap.to(this.container, { x: 0, duration: 0.5 });
  }

  hide(state) {
    gsap.to(this.container, {
      x: 300,
      duration: 1,
      onComplete: this.hideComplete.bind(this, state),
    });
  }

  hideComplete(state) {
    var event = new CustomEvent("hide-complete", {
      detail: {
        state: state,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });
    this.container.dispatchEvent(event);
  }
}
