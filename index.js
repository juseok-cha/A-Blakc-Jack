let firstCard = 9
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack =  false
let isAlived = true
let message = ""



// 2. Create a startbutton. 
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
    
    // 3. Log it out. 
    console.log(message)

}
