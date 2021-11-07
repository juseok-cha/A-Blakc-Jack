let player = {
    name: "Per",
    chips: 145, 
    sayHello: function () {
        console.log("hello")
    }
}

player.sayHello()
let cards = []
let sum = 0
let hasBlackJack =  false
let isAlived = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $" + player.chips

// 랜덤으로 숫자를 생성하는 함수
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1)
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
    
}

// 게임을 시작하는 함수, 두개의 카드를 정의함 
function startGame(){
    isAlived = true
    // Generate two random numbers 
    let firstCard = getRandomCard()
    let secondCard =  getRandomCard()
    // Re-assign the cards and sum. variables so that the game start
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// 게임을 진행하는 함수 
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
    // Only allow the player to get a new card if she IS alive and does NOT have blackjack
    if (isAlived === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}
