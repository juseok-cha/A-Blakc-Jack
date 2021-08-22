let firstCard = 9
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack =  false
let isAlived = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// 2. Store teh cards paragraph in a variable called cardEl
let cardsEl = document.querySelector("#cards-el")
console.log(cardsEl)

function startGame(){
    // 3. Render teh cars on the page using this format -> "Cards 10 4"
    cardsEl.textContent  = "Cards: " + firstCard + " "+secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20 ) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        massage = "You are out of the game."
        isAlived = false
    }
    
    messageEl.textContent = message

}

// 2. Create a function newCard() that logs out "Drawing a new card"
function newCard() {
    console.log("Drawing a new card")
}
