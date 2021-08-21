let firstCard = 10
let secondCard = 7 
let sum = firstCard + secondCard

// Write teh conditional according to these rules: 

// if less than or equal to 20 -> " Do you want to draw a new card?"
// else if exactly 21 -> "Wohoo! You've got Blackjack!"
// else -> "You are out of the game"

if (sum <= 20 ) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!")
} else {
    console.log("You are out of the game.")
}