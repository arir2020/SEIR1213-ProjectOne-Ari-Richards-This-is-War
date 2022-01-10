//VARIABLES
const suits = ["♥", "♦", "♠", "♣"]
const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let cards = []
let playingDeck = []
let playersDeck = []
let computersDeck = []
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
const psDeck = document.getElementById("pDeckDisplay")
const psCard = document.getElementById("pCardDisplay")
const csDeck = document.getElementById("cDeckDisplay")
const csCard = document.getElementById("cCardDisplay")
const pWb = document.getElementById("playersWinbox")
const cWb = document.getElementById("computersWinbox")
const displayWinner = document.getElementById("winnersResult")
const resetButton = document.getElementById("reset")

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

function dealCards(playingDeck){
    for (let w = 0; w < 26; w++){
        playersDeck.push(playingDeck.pop([w]))
        computersDeck.push(playingDeck.pop([w]))
    }
}

function clearCards(playingDeck){
    for(let r = 0; r < 26; r++){
        playersDeck.pop(playingDeck.push[w])
        computersDeck.pop(playingDeck.push[w])
    }
}

function compareCards(card1, card2){
    if (card1.value == card2.value){
        playersDeck.shift(card1)
        computersDeck.shift(card2)
        winner = "no one! issa tie!"
        console.log(card1, card2)
        points = null
        displayRemainingCards()
        showWinner()
    } 
    else if (card1.value > card2.value){
        computersDeck.shift(card2)
        playersDeck.unshift(card1)
        playersDeck.unshift(card2)
        winner = "player"
        pScore + points
        displayRemainingCards()
        showWinner()
    }
     else if (card2.value > card1.value) {
        playersDeck.shift(card1)
        computersDeck.unshift(card1)
        computersDeck.unshift(card2)
        winner = "computer"
        cScore + points
        displayRemainingCards()
        showWinner()
    }
    return winner
} 
//   if (playersDeck.length === 0 && computersDeck.length > playersDeck.length){
//         winner = "computer"
//         console.log("Game Over! Computer wins!")
//     } else if (computersDeck.length === 0 && playersDeck.length > computersDeck) {
//         winner = "player"
//         console.log("Game Over! Player wins!")
//     } else (computersDeck.length === 0 && playersDeck.length === 0);{
//         winner = "tie"
//         console.log("Game Over! Issa draw!")
//     }

function drawCard(){
    let playersCard = playersDeck.pop();
    let computersCard = computersDeck.pop();
    for(let s = 0; s < playersDeck.length; s+= 1){
    playersCard = playersDeck[s+=1]
    computersCard = playersDeck[s+=1]
    }
}

function displayCards(card1, card2){
    pCardDisplay.innerText = card1.suit + " " + card1.rank 
    cCardDisplay.innerText = card2.suit + " " + card2.rank
}

function displayScore(){
    playersScore.innerText = pScore
    computersScore.innerText = cScore
}


function displayRemainingCards() {
    psDeck.innerText = "Cards Remaining: " + playersDeck.length
    csDeck.innerText = "Cards Remaining: " + computersDeck.length
}

function showWinner() {
    displayWinner.textContent = "The winner is " + winner
}

function endGame(){    
    if (computersDeck.length == 0 && playersDeck.length == 0){
        alert("Game Over! Issa draw!")
    } else if (computersDeck.length == 0 && playersDeck.length > computersDeck.length){
        alert("Game Over! Player wins!")
    } else (playersDeck.length == 0 && computersDeck.length > playersDeck.length);{
        alert("Game Over! Computer wins!")
    }
}

//BUTTONS

startButton.addEventListener("click", function(){
   let playingDeck = createDeck()
   let shuffledDeck =  shuffleDeck(playingDeck)
    dealCards(shuffledDeck)
    displayScore()
    displayRemainingCards()
    alert("The War Has Begun!")
})

// })
//wrap in conditional (109-112) so you can't play cards that don't exist and alert game over on the else
playButton.addEventListener("click", function(){
    console.log(playersDeck)
    console.log(computersDeck)
    for (p = 0; p < 26; p++){
    const pCard = playersDeck[p]
    const cCard = computersDeck[p]
    displayCards(pCard, cCard) 
    } 
    for( o = 0; o < 2; o+=1){
    const newPCard = playersDeck[o]    
    const newCCard = computersDeck[o]
   displayCards(newPCard, newCCard)
    }
    // compareCards(pCard, cCard)
    // drawCard()

})

// playButton.addEventListener("click", function(){
//     dealCards(playersDeck, computersDeck)
// })

trigger.addEventListener("click", function(){
    for(let l = 0; l < 2; l+=1){
    const pCard = playersDeck[l]
    const cCard = computersDeck[l]   
   compareCards(pCard, cCard) 
    }
   displayScore()
   showWinner()
   endGame()
    })


resetButton.addEventListener("click", function(){
    document.location.reload()
})