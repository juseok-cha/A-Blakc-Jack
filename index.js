let firstCard = getRendomCard()
let secondCard = getRendomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack =  false
let isAlived = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")


// Create a function, getRendomCard(), that always return number 5
function getRendomCard() {
    return 5;
}

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent  = "Cards: " 
    for ( let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "

    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20 ) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlived = false
    }

    messageEl.textContent = message
}

function newCard() {
    let card = getRendomCard()
    sum += card
    cards.push(card)
    renderGame()
}
