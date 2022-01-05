// // const suits = ["♥", "♦", "♠", "♣"];
// // const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

// // for( let i = 0; i < suits.length; i++){
// // //     for ( let j = 0; j < values.length; j++)}


// // const suits = ["♥", "♦", "♠", "♣"];
// // const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
// // function createDeck(){
// //  let deck = [];   
// // for( let i = 0; i < suits.length; i++){
// //     for ( let j = 0; j < values.length; j++){    

// //         let card = {
// //             Value: values[j], Suit: suits[i]
// //         };
// //         // console.log(values[j], suits[i])
// //         // deck = (values[j], suits[i]);
// //         // console.log(deck)
// //         }
// //         console.log(card)
// //     }    
// //      console.log(deck)
// // }

// // class Deck {
// //     constructor() {

function createDeck(){
 const suits = ["♥", "♦", "♠", "♣"];
 const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 let deck = [];
for( let i = 0; i < suits.length; i++){
    for ( let j = 0; j < values.length; j++){  
        // console.log(suits[i], values[j]);
        let cards = suits[i] + values[j];
        deck.push(cards);
         }
    }    
    return deck; 
}    

function shuffleDeck(deck){
for( let x = 0; x < 52; x++){
    let temp = deck[x];
    let s = Math.floor(Math.random()*52);
    deck[x] = deck[s];
    deck[s] = deck[x];
    }
}

let newDeck = createDeck();
shuffleDeck(newDeck);
console.log(newDeck);

