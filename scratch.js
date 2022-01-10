// let card = []
// let cards = []
// let deck = []
// let playersName = []
// let playersDeck = []
// let computersDeck = []
// let gameResult = []
// let newGame = null
// let playersCard = []
// let computersCard = []
// let winner = ""
// let pWins = 0
// let cWins = 0
// let turn = 0

// class Card {
//     constructor(suit, rank, value) {
//         this.suit = suit
//         this.rank = rank
//         this.value = value

//     }
// }



// class Deck {
//     constructor() {
//         this.cards = [];
//     }
//     createDeck() {
//         const suits = ["♥", "♦", "♠", "♣"];
//         const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
//         const values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//         // let deck = new deck();
//         for (let i = 0; i < suits.length; i++) {
//             for (let j = 0; j < ranks.length; j++) {
//                 // let cards = suits[i] + ranks[j];
//                 let newCard = {
//                     suit: suits[i],
//                     rank: ranks[j],
//                     value : values[j]
//                 }
//                 this.cards.push(newCard);
//             }
//         }
//     }

//     shuffleDeck() {
//         for (let x = 0; x < 52; x++) {
//             let temp = this.cards[x];
//             let s = Math.floor(Math.random() * 52);
//             this.cards[x] = this.cards[s];
//             this.cards[s] = temp;
//         }
//     }
//     dealDeck(p1, p2){
//         for (let w = 0; w < this.cards.length; w++) {
//             if (w % 2 === 0){
//                 p1.push(this.cards[w]);
//             } else {
//                 p2.push(this.cards[w]);
//             }
//         }
//     }
// }


// class Player {
//     constructor(name) {
//         this.playersName = name;
//         this.playersDeck = [];
//     }
// }

// class Computer {
//     constructor() {
//         this.computersName = "computer";
//         this.computersDeck = [];
//     }
// }


// class Gameboard {
//     constructor() {
//         this.players = [];
//     }
//     start(playersName) {
//         this.players.push(new Player(playersName));
//         this.players.push(new Computer());
//         deck  = new Deck();
//         deck.createDeck();
//         deck.shuffleDeck();
//         deck.dealDeck(playersDeck, computersDeck);
//         // this.players[0].playersDeck = z.cards.slice(0, 26);
//         // this.players[1].computersDeck = z.cards.slice(26, 52);
//     }
//     compareCards(card1, card2){
//         if (card1.value === card2.value) {
//             console.log("tie")
//         } else if (card1.value < card2.value) {
//             console.log("card 2 wins")
//         } else {
//             console.log("card 1 wins")
//         }
//     }
//     playCards(){
//         let pCard = playersDeck.pop()
//         let cCard = computersDeck.pop()
//         // console.log(pCard, cCard)
//         // this.compareCards(pCard, cCard)
//         // call compareCards and push in pCard & cCard
//     }
// }


// //To-Do
// //remove event listener to prevent restart of game
// //add event listener to game result
// //refactor playCards to call the compareCards()
// const trigger = document.getElementById("gameResult")
// const startButton = document.getElementById("startButton")
// const playButton = document.getElementById("playButton")
// const playersHand = document.getElementById("playersDeck")
// const computersHand = document.getElementById("computersDeck")

// function startGame(){
//     newGame = new Gameboard()
//     newGame.start()
//     // newGame.playCards()
//     // trigger.addEventListener("click", gameTurn)
//     startButton.removeEventListener("click", startGame)
// }

// startButton.addEventListener("click", startGame)

// startButton.addEventListener("click", function(){alert("The War Has Begun!")})

// let playingDeck  = new Deck()
//         playingDeck.createDeck()
//         playingDeck.shuffleDeck()
//         playingDeck.dealDeck(playersDeck, computersDeck);
        

//     let pCard = playersDeck.pop()
//     let cCard = computersDeck.pop()
//     // console.log(pCard, cCard) 

//  function   createDeck() {
//         const suits = ["♥", "♦", "♠", "♣"];
//         const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
//         const values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//         // let deck = new deck();
//         for (let i = 0; i < suits.length; i++) {
//             for (let j = 0; j < ranks.length; j++) {
//                 // let cards = suits[i] + ranks[j];
//                 let newCard = {
//                     suit: suits[i],
//                     rank: ranks[j],
//                     value : values[j]
//                 }
//                 this.cards.push(newCard);
//             }
//         }
//  }
// function gameTurn(){
//     newGame.playCards()
// }
// function compareCards(pCard, cCard){
//     if (pCard.value === cCard.value) {
//        return "tie"
//         // console.log("tie")
//     } else if (cCard.value > pCard.value) {
//         return cCard
//         // console.log("card 2 wins")
//     } else {
//         return pCard
//         // console.log("card 1 wins")
//     }
// }

// // function winConditions(pCard, cCard){
// //     for(let q = 0; q < deck.length; q++){
// //     if (pCard.value > cCard.value){
// //         computersCard.pop(cCard[q])
// //         comparison.push(pCard[q])
// //         console.log(pCard)
// //     } else if (pCard.value < cCard.value){
// //         playersCard.pop(pCard)
// //         comparison.push(cCard)
// //         console.log(cCard)
// //     } else {
// //         console.log("issa tie")
// //         }
// //     }
// // }

// function findWinner(){
//     if (pCard.value > cCard.value){
//         winner = "Player"
//         pWins++
//     } else if (pCard.value < cCard.value){
//         winner = "Computer"
//         cWins++
//     } else {
//         winner = "Tie"
//     }
// }

// // function decideWinner(pCard, cCard)

// playButton.addEventListener("click", function(){ 
//      playersDeck.pop(pCard)
//      computersDeck.pop(cCard)
//      console.log(pCard)
//      console.log(cCard)
// })



// trigger.addEventListener("click", function(){
//     compareCards(pCard, cCard)
// });

// let comparison = []

// trigger.addEventListener("click", function(){
//     findWinner(pCard, cCard)
//     alert("The winner is")
// })
    
// // trigger.addEventListener("click", showComparison)
// // playButton.addEventListener("click", alert(compareCards(pCard, cCard)))
// // function storeCards(){
// //     newGame.playCards()
// //     computersDeck.splice()
// //     console.log(storeCards)

// // // }

// // // Key Priorities
// // // call playCards -> take info from pCard and cCard and put it on the DOM
// // // alert displays game started and winnner of card comparison 
// // // create a system to keep tracks of wins (i.e. a variable that saves wins, array that contains wins, handle win function inside of playCards, etc.)
// // // Check for gameOver function (i.e. if else check related to deck size)
// // // Display message of final winner and give button to reset

// // // document.getElementById("computersDeck").appendChild(computersDeck);
// // //     console.log(computersDeck.childNodes)


// // // // document.addEventListener("click", function(){
// // //         let newDeck = createDeck();
// // //         shuffleDeck(newDeck);
// // //         console.log(newDeck);
// // //         })

// // // let board = new Gameboard();
// // // board.start("Ari");
// // // console.log(board.players);

// // // let playersDeck = [];
// // // let computersDeck = [];
// // // let gameDeck = createDeck();
// // // function splitDeck(gameDeck){
// // //     for(let k = 0; k < 52; k++){
// // //         if (k % 2 === 0){
// // //             playersDeck.push(gameDeck.pop(k));
// // //         } else {
// // //            computersDeck.push(gameDeck.pop(k));
// // //         }

// // //         }
// // //         // return gameDeck;
// // //     }

// // // console.log(playersDeck);
// // // console.log(computersDeck);


// // // const d = new Deck();
// // // d.createDeck();
// // // console.log(d.cards);

// // // function createDeck() {
// // //     const suits = ["♥", "♦", "♠", "♣"];
// // //     const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
// // //     //  const scores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
// // //     let deck = [];
// // //     for (let i = 0; i < suits.length; i++) {
// // //         for (let j = 0; j < ranks.length; j++) {
// // //             // for ( let t = 0; t < scores.length; t++){
// // //             // console.log(suits[i], values[j]);
// // //             let cards = suits[i] + ranks[j];
// // //             //  + scores[t];
// // //             deck.push(cards);
// // //             // }
// // //         }
// // //     }
// // //     return deck;
// // // }

// // // function shuffleDeck(deck) {
// // //     for (let x = 0; x < 52; x++) {
// // //         let temp = deck[x];
// // //         let s = Math.floor(Math.random() * 52);
// // //         deck[x] = deck[s];
// // //         deck[s] = temp;
// // //     }
// // //     return deck;
// // // }

// // // create global variable for player's and computer's decks
// // // let playersDeck = [];
// // // let computersDeck = [];
// // // function splitDeck(){
// //     //  loop through new deck, give card to player, and give every other card to computer
// //     // pop cards from shuffle deck into arrays (if else check/loop)
// // // }
// // // let playersDeck = [];
// // // let computersDeck = [];
// // // let gameDeck = createDeck();
// // // function splitDeck(gameDeck){
// // //     for(let k = 0; k < 52; k++){
// // //         if (k % 2 === 0){
// // //             playersDeck.push(gameDeck.pop(k));
// // //         } else {
// // //            computersDeck.push(gameDeck.pop(k));
// // //         }

// // //         }
// // //         return gameDeck;
// // //     }

// // // shuffleDeck(gameDeck);
// // // splitDeck(gameDeck);
// // // console.log(playersDeck);
// // // console.log(computersDeck);

// // // document.addEventListener("click", function(){
// // //     let newDeck = createDeck();
// // //     shuffleDeck(newDeck);
// // //     console.log(newDeck);
// // 