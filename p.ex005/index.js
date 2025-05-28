// let person = { name: "Neyton", age: 19, country: "Mozambique" };

// function logData() {
//   console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()

// let age = 20

// if (age < 6) {
//   console.log("Free")
// } else if (age < 18) {
//   console.log("Child discount")
// } else if (age < 27) {
//   console.log("Student discount")
// } else if (age < 67) {
//   console.log("Full price")
// } else {
//   console.log("Senior citizen discount")
// }

// let largeCountries = [
//   "China", 
//   "India", 
//   "USA", 
//   "Indonesia", 
//   "Pakistan"
// ];

// console.log("The five largest countries in the world: ")
// for (i = 0; i < largeCountries.length; i++) {
//   console.log("- " + largeCountries[i])
// }

// let largeCountries = [
//   "Tuvalu", 
//   "India", 
//   "USA", 
//   "Indonesia", 
//   "Monaco"
// ];
// largeCountries.pop()  
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")

// console.log("The five largest countries in the world: ")
// for (i = 0; i < largeCountries.length; i++) {
//   console.log("- " + largeCountries[i])
// }

// let hands = [ "Rock", "Paper", "Scissor"]

// function rockPaperScissor() {
//   let randomIndex = Math.floor(Math.random() * 3)
//   return hands[randomIndex]
// }

// console.log(rockPaperScissor())

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// function getFruits() {
//   for (i = 0; i < fruit.length; i++) {
//     if (fruit[i] === "🍎") {
//       appleShelf.textContent += "🍎"
//     } else {
//       orangeShelf.textContent += "🍊"
//     }
//   }
// }

// getFruits()


let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
  for (i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += "🍎"
    } else if (fruit[i] === "🍊") {
      orangeShelf.textContent += "🍊"
    }
  }
}

sortFruit()