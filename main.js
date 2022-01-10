//VARIABLES
const suits = ["♥", "♦", "♠", "♣"]
const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let cards = []
let playersDeck = [];
let computersDeck = [];
let player = []
let computer = []
let playersHand = []
let computersHand = []
let winner = ""
let pScore = 0
let cScore = 0
let pWins = 0
let cWins = 0
const trigger = document.getElementById("gameResult")
const startButton = document.getElementById("startButton")
const playButton = document.getElementById("playButton")
const playersScore = document.getElementById("playersScorebox")
const computersScore = document.getElementById("computersScorebox")
const psDeck = document.getElementById("playersDeck")
const psCard = document.getElementById("pCardDisplay")
const csDeck = document.getElementById("computersDeck")
const csCard = document.getElementById("cCardDisplay")
// const pWb = document.getElementById("playersWinbox")
// const cWb = document.getElementById("computersWinbox")
const displayWinner = document.getElementById("winnersResult")
const pCardsLeft = document.getElementById("playersScorebox")
const cCardsLeft = document.getElementById("computersScorebox")

//FUNCTIONS

function createDeck() {
    let deck = [];
    for (let x = 0; x < suits.length; x++) {
        for (let y = 0; y < ranks.length; y++) {
            cards = ({ suit: suits[x], rank: ranks[y], value: values[y] })
            deck.push(cards)
        }
    }
    return deck;
}


function shuffleDeck(deck) {
    for (let m = 0; m < 52; m++) {
        let temp = deck[m];
        let randomizer = Math.floor(Math.random() * 52);
        deck[m] = deck[randomizer];
        deck[randomizer] = temp;
    }
    return deck;
}

function dealCards(deck){
    for (let w = 0; w < 26; w++){
    playersDeck.push(deck.pop())
    computersDeck.push(deck.pop())
    }
}

function compareCards(card1, card2){
    if (card1.value === card2.value){
        player.push(card1)
        computer.push(card2)
        winner = "tie"
        displayScore()
        showWinner()
    } 
    else if (card1.value > card2.value){
        player.push(card1)
        player.push(card2)
        computer.pop(card2)
        winner = "player"
        pScore++
        // addScore(card1, card2)
        displayScore()
        showWinner()
    }
     else if (card2.value > card1.value) {
        computer.push(card1)
        computer.push(card2)
        player.pop(card1)
        winner = "computer"
        cScore++
        // addScore(card1, card2)
        displayScore()
        showWinner()
    }
    return winner
}  

function  winConditions(){
    if (playersDeck.length === 0 && computersDeck.length > playersDeck.length){
        winner = "computer"
        console.log("Game Over! Computer wins!")
    } else if (computersDeck.length === 0 && playersDeck.length > computersDeck) {
        winner = "player"
        console.log("Game Over! Player wins!")
    } else (computersDeck.length === 0 && playersDeck.length === 0);{
        winner = "tie"
        console.log("Game Over! Issa draw!")
    }
}


// function addScore(card1, card2){
//     if(winner ="player"){
//        console.log(card1 + card2)
//     } else(winner = "computer"); {
//         console.log(card1 + card2)
//     }
// }


function displayCards(card1, card2){
    pCardDisplay.innerText = card1.suit + card1.rank 
    cCardDisplay.innerText = card2.suit + card2.rank

    // playersDeck.push(card1)
    // computersDeck.push(card2)
}


function displayScore() {
    pCardsLeft.innerText = playersDeck.length
    cCardsLeft.innerText = computersDeck.length
}

function showWinner() {
    displayWinner.textContent = winner
}

function playCards(nextCard1, nextCard2){
    let nextCard1 = []
    let nextCard2 =[]
    for(let u = 0; u < 2; u++){
        nextCard1 = playersDeck[w]
        nextCard2 = computersDeck[w]
        console.log(nextCard1)
        console.log(nextCard2)
    }
}

//BUTTONS

startButton.addEventListener("click", function(){
   let playingDeck = createDeck()
   let shuffledDeck =  shuffleDeck(playingDeck)
    dealCards(shuffledDeck)
    console.log(playersDeck)
    console.log(computersDeck)
})

// trigger.addEventListener("click", function(){
//     compareCards(playersCard, computersCard)

// })
//wrap in conditional (109-112) so you can't play cards that don't exist and alert game over on the else
playButton.addEventListener("click", function(){
    for(let w = 0; w < 26; w++){
    displayCards(pCard, cCard)
    }
})

trigger.addEventListener("click", function(){
    const pCard = playersDeck[0]
    const cCard = computersDeck[0]
   compareCards(pCard, cCard)
   winConditions()

    // addScore(pCard, cCard)
})



// playersScore.addEventListener("click", function(){
//     console.log(pScore)
// })

// computersScore.addEventListener("click", function(){
//     console.log(cScore)
// })

// psDeck.addEventListener("click", function(){
//     console.log(playersDeck)
// })
// psCard.addEventListener("click", function(){
//     console.log(playersCard)
// })
// csDeck.addEventListener("click", function(){
//     console.log(computersDeck)
// })
// csCard.addEventListener("click", function(){
//     console.log(computersCard)
// })