export class PlayService {
    constructor(controller){
        this.controller=controller;
    }

    getCards(){
        var cards = [];
        this.controller.showCard(cards);
    }

    sendScore(){}
}