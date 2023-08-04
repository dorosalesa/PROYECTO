import { Controller } from "../controller.js";
import { PlayService } from "./playService.js";
import { PlayView } from "./playView.js";

export class PlayController extends Controller {
  constructor(gameManager, parent) {
    super(gameManager);
    this.view = new PlayView(this, parent);
    this.cards = null;
    this.service = new PlayService(this);
    this.service.getCards(this.gameManager.difficulty, this.gameManager.theme);

    this.timer = null;

    this.time = 0;
    this.clicks = 0;

    window.addEventListener("card-selected", (event) => {
      this.onCardSelected();
    });

    this.hiddenTimer = null;
  }

  showCards(cards) {
    this.cards = cards;
    this.view.showCards(cards);
    this.timer = window.setInterval(this.gameTick.bind(this), 1000);
  }

  resetGame() {
    this.killGameTimer();
    this.time = 0;
    this.clicks = 0;
    this.service.getCards(this.gameManager.difficulty, this.gameManager.theme);
    this.view.updateHUD(this.clicks, this.time);
  }

  gameTick() {
    this.time += 1;
    this.view.updateHUD(this.clicks, this.time);
  }

  onCardSelected() {
    if (this.hiddenTimer !== null) return;

    var showCardEvent = new CustomEvent("show-card-on-selected", {
      detail: {
        card: null,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });

    this.view.container.dispatchEvent(showCardEvent);

    let cardSelected1 = null;
    let cardSelected2 = null;

    this.cards.forEach((card) => {
      if (!card.isDiscovered) {
        if (cardSelected1 === null && card.isSelected) {
          cardSelected1 = card;
        } else if (cardSelected2 === null && card.isSelected) {
          cardSelected2 = card;
        }
      }
    });

    if (cardSelected1 !== null && cardSelected2 !== null) {
      if (cardSelected1.id === cardSelected2.id) {
        var event = new CustomEvent("show-card-on-discovered", {
          detail: {
            card: this.card,
          },
          bubbles: true,
          cancelable: true,
          composed: false,
        });

        this.view.container.dispatchEvent(event);
      } else {
        this.hiddenTimer = window.setTimeout(() => {
          var event = new CustomEvent("hide-selected-card", {
            detail: {
              card: this.card,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
          });

          this.view.container.dispatchEvent(event);
          window.clearTimeout(this.hiddenTimer);
          this.hiddenTimer = null;

          if (this.checkGameComplete()) {
            this.killGameTimer();
            console.log("game complete");
          }
        }, 900);
      }
    }
  }

  killGameTimer() {
    window.clearInterval(this.timer);
    this.timer = null;
  }

  checkGameComplete() {
    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i];
      if (card.isDiscovered) {
        return false;
      }
    }
    return true;
  }
}
