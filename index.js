let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack =  false
// 1. Create a variable called isAlived and assign it to true. 
let isAlived = true

// 2. Flip its value to false in the appropriate code block. 

if (sum <= 20 ) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!")
    hasBlackJack = true
} else {
    console.log("You are out of the game.")
    isAlived = false
}

// CASH OUT!
console.log(hasBlackJack)