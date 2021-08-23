let firstCard = 9
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack =  false
let isAlived = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame(){
    cardsEl.textContent  = "Cards: " + firstCard + " " +secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20 ) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlived = false
        console.log("hi")
    }

    messageEl.textContent = message
}

function newCard() {
    // 1. Create a card variable, and hard code its value to a number. 

    // 2. Add the new card to the sum variable

    // 3. Call startGame()

    let card = 1
    sum += card
    startGame()
}
