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

class Card{
    constructor(suit, rank, value){
        this.suit = suit
        this.rank = rank
        this.value = value
    
    }
}
class Deck{
    constructor(){
        this.cards = [];
    }
    createDeck(){
        const suits = ["♥", "♦", "♠", "♣"];
        const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
       for( let i = 0; i < suits.length; i++){
           for ( let j = 0; j < ranks.length; j++){  
               let cards = suits[i] + ranks[j];
               this.cards.push(cards);
                }
           }    
        }
        shuffleDeck(){
            for( let x = 0; x < 52; x++){
                let temp = this.cards[x];
                let s = Math.floor(Math.random()*52);
                this.cards[x] = this.cards[s];
                this.cards[s] = temp;
                }

        }
}

class Player{
    constructor(name){
        this.playersName = name;
        this.playersDeck = [];
    }
}

class Computer{
    constructor(){
        this.computersName = "computer";
        this.computersDeck = [];
    }
}


class Gameboard{
    constructor(){
        this.players = [];
    }
    start(playersName){
        this.players.push(new Player(playersName));
        this.players.push(new Computer());
        let z = new Deck();
        z.createDeck();
        z.shuffleDeck();
        this.players[0].playersDeck = z.cards.slice(0,26);
        this.players[1].computersDeck = z.cards.slice(26, 52);
    }
}
document.getElementById("startButton").addEventListener("click", function(){
    let board = new Gameboard();
    board.start();
    console.log(board.players);
})

document.getElementById("playersDeck").append(playersDeck);
    console.log(playersDeck.childNodes)


// document.addEventListener("click", function(){
//         let newDeck = createDeck();
//         shuffleDeck(newDeck);
//         console.log(newDeck);
//         })

// let board = new Gameboard();
// board.start("Ari");
// console.log(board.players);

// let playersDeck = [];
// let computersDeck = [];
// let gameDeck = createDeck();
// function splitDeck(gameDeck){
//     for(let k = 0; k < 52; k++){
//         if (k % 2 === 0){
//             playersDeck.push(gameDeck.pop(k));
//         } else {
//            computersDeck.push(gameDeck.pop(k));
//         }

//         }
//         // return gameDeck;
//     }

// console.log(playersDeck);
// console.log(computersDeck);


// const d = new Deck();
// d.createDeck();
// console.log(d.cards);

function createDeck(){
 const suits = ["♥", "♦", "♠", "♣"];
 const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
//  const scores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
 let deck = [];
for( let i = 0; i < suits.length; i++){
    for ( let j = 0; j < ranks.length; j++){  
        // for ( let t = 0; t < scores.length; t++){
        // console.log(suits[i], values[j]);
        let cards = suits[i] + ranks[j];
                                         //  + scores[t];
        deck.push(cards);
            // }
         }
    }    
    return deck; 
}    

function shuffleDeck(deck){
for( let x = 0; x < 52; x++){
    let temp = deck[x];
    let s = Math.floor(Math.random()*52);
    deck[x] = deck[s];
    deck[s] = temp;
    }
    return deck;
}

// create global variable for player's and computer's decks
// let playersDeck = [];
// let computersDeck = [];
// function splitDeck(){
    //  loop through new deck, give card to player, and give every other card to computer
    // pop cards from shuffle deck into arrays (if else check/loop)  
// }
// let playersDeck = [];
// let computersDeck = [];
// let gameDeck = createDeck();
// function splitDeck(gameDeck){
//     for(let k = 0; k < 52; k++){
//         if (k % 2 === 0){
//             playersDeck.push(gameDeck.pop(k));
//         } else {
//            computersDeck.push(gameDeck.pop(k));
//         }

//         }
//         return gameDeck;
//     }

// shuffleDeck(gameDeck);
// splitDeck(gameDeck);
// console.log(playersDeck);
// console.log(computersDeck);

// document.addEventListener("click", function(){
//     let newDeck = createDeck();
//     shuffleDeck(newDeck);
//     console.log(newDeck);
//     })
