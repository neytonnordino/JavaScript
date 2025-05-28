// console.log(4 === 3) //false
// console.log(5 > 2) //true
// console.log(12 > 12) //false
// console.log(3 < 0) //false
// console.log(3 >= 3) //true
// console.log(11 <= 11) //true
// console.log(3 <= 2) //false
let player = {
  name: "Neyton",
  chips: 150
}
let cards = [];
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumber = Math.floor(Math.random()*13) + 1
  if (randomNumber === 1) {
    return 11
  } else if (randomNumber > 10) {
    return 10
  } else {
    return randomNumber
  }
}

function startGame() {
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  isAlive = true
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got bBlackJack! ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    let card = getRandomCard()
    sum += card;
    cards.push(card);
    renderGame();
  }
}

// let age = 21

// if (age < 21) {
//   console.log("You can not enter the club!")
// }  else {
//   console.log("Welcome")
// }

// let age = 100

// if (age < 100) {
//   console.log("Not elegible")
// } else if (age === 100) {
//   console.log("Here is your birthday card from the king!")
// } else {
//   console.log("Not elegible, you have already gotten one")
// }

// for ( let count = 10; count < 21; count += 1 ) {

//   console.log(count)

// }

// for ( let i = 10; i < 101; i += 10) {

//   console.log(i)

// }
