// let randomNumber = Math.random() * 6

// console.log(randomNumber)

// Answer: by logging out a few times i could understand that it generates any number between 0 - 1 (not including 1)

// Now it's between 0 - 6 (And again not including the 6)

//  Math.floor()

// let floorNumber = Math.floor(.45632)

// console.log(floorNumber)

// Answer: It ignores the decimals

// let randomNumber = Math.floor(Math.random()*6) + 1

// console.log(randomNumber)

// Answer: it will log numbers between 0 - 6(not included), without the decimals

// Answer2: I couldn't figure how to go from 1, but i managed to do it go to 7

// function rollDice() {
//   let randomNumber = Math.floor(Math.random()*6) + 1
//   return randomNumber

// }
// console.log(rollDice())

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let button = document.getElementById("button")
let stageEl = document.getElementById("stage")

function buttonStart() {
  stageEl.textContent = "Let's play. Click on the button"
}

button.addEventListener("click", function() {
  let currentIndexOne = Math.floor(Math.random() * fighters.length)
  let currentIndexTwo = Math.floor(Math.random() * fighters.length)
  stageEl.textContent = fighters[currentIndexOne] + " vs " + fighters[currentIndexTwo]
})
buttonStart()