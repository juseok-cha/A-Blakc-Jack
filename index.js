let firstCard = 9
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack =  false
let isAlived = true
let message = ""

// 1. Store the message-el paragrah in a variable called messageEl
let messageEl = document.getElementById("message-el")
console.log(messageEl)


function startGame(){

    if (sum <= 20 ) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        massage = "You are out of the game."
        isAlived = false
    }
    
    // 2. Display the message in th emessageEl using messageEl.textContent. 
    messageEl.textContent = message

}
