console.log('js:loaded')

const suits = ["♥", "♦", "♠", "♣"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
function createDeck(){
 let deck = [];   
for( let i = 0; i < suits.length; i++){
    for ( let j = 0; j < values.length; j++){    

        let card = {
            Value: values[j], Suit: suits[i],
            console.log(card)
        };
        // console.log(values[j], suits[i])
        // deck = (values[j], suits[i]);
        // console.log(deck)
        }
    }    
     console.log(deck)
}

class Cards{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}

const 