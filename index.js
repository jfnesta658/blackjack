

let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ''

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "JNest",
    chips: 14
}

playerEl.textContent = player.name + ': $' + player.chips


function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    isAlive = true
    sum = firstCard + secondCard
    cards.push(firstCard, secondCard)
    renderGame()
}

function renderGame() {
    console.log(cards)
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = 'Sum: ' + sum
    cardsEl.textContent = 'Cards: ' + cards.join(' ')
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}

function getRandomCard() {
    let num = Math.floor(Math.random() * 13) + 1
    if (num === 1) {
        return 11
    } else if (num >= 11) {
        return 10
    } else {
        return num
    }
}