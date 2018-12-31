var Deck = class Deck {
    constructor(cards) {
        this.cards = cards;
        this.deck = shuffle(cards.slice());
    }

    drawTopCard() {
        if(this.deck.length == 0) {
            this.deck = shuffle(this.cards.slice());
            confirm("The deck was shuffled because you used all the cards.");
        }
        return this.deck.pop();
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function pushEvent() {
    document.getElementById("eventOutput").innerHTML = eventDeck.drawTopCard();
}

var eventCards = [
    "You died.",
    "Your wagon's wheel has broken. Give the carpenter $1 in order to move next turn.",
    "Some of your money was stolen by bandits. Change your currency level to half of its current level. Round your division up",
    "You found gold in a creek. Add $10 to your currency level.", 
    "Your food was stolen by bandits. Change your food level to 0.",
    "You found fresh herbs. Add 2 to your food level.",
    "You found a fresh, healthy deer carcass that another hunter did not recover. Add 6 to your food level.",
    "A storm slowed your travels. Move back one space.",
    "A stranger with a horse allowed you to travel with them. Advance one extra space.",
    "You killed a deer and made smoked meats. Add 10 to your food level.",
    "You left your canteen open too long and some of it evaporated. If your water level is above 0, change it to 1.",
    "Rainstorms have given you a surplus of water. Add 3 to your water level.",
    "You found a store near a settlement. You may exchange $2 for each food point you add.",
    "You found someone selling water from a well. You may exchange $1 for every 2 water points you add.",
    "You forgot your food when you left camp this morning. Subtract 1 from you food level for each other player on your path and add one to the food level of each other player on your path.",
    "Rainstorms have slowed your travels. Move back one space and add 3 to your water level.",
    "You found a fresh spring. Add 10 to your water level."
];
var eventDeck = new Deck(eventCards);

function pushItem() {
    document.getElementById("itemOutput").innerHTML = itemDeck.drawTopCard();
}

var itemCards = [
    "Pickaxe",
    "Dried meat",
    "Casting hammer",
    "Wagon"
];
var itemDeck = new Deck(itemCards);
