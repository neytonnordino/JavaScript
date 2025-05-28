// const player = "Neyton"
// const opponent = "Nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false

// points += 100
// hasWon = true  

// if (hasWon) {
//   console.log(`${player} got ${points} points and won the ${game} game!`)
// } else {
//   console.log(`The winner is ${opponent}! ${player} lost the game`)
// }

// let myCourse = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// function arrayItems(arr){
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//   }
// }

// arrayItems(myCourse)

// console.log( localStorage.getItem("Leads" ) )


// const listenBtn = document.getElementById("listen-btn")
// let data = [
//   {
//     player: "Jane",
//     score: 52
//   },
//   {
//     player: "Mark",
//     score: 41
//   }

// ]

// listenBtn.addEventListener("click", function() {
//   console.log(data[0].score)
// })

// function generateSentence(desc, arr) { 
//   let baseString = `The ${arr.length} best ${desc} are`
//   const lastIndex = arr.length - 1
//   for (let i = 0; i < arr.length; i++) {
//     if (i === lastIndex) {
//       baseString += arr[i]
//     } else {
//       baseString += arr[i] + ", "
//     }
    
//   }
//   return baseString
// }

// const sentence = generateSentence("actors of 2020", ["Leonardo DiCaprio", "Joaquin Phoenix", "Jason Statham"])
// console.log(sentence)

const imgs = [
  "images/hip1.jpg",
  "images/hip2.jpg",
  "images/hip3.jpg"
]
const container = document.getElementById("container")

function employersImages() {
  let imagesDom = ""
  for (let i = 0; i < imgs.length; i++) {
    imagesDom += `<img class="team-img" alt="employee images" src="${imgs[i]}">`
  }
  container.innerHTML = imagesDom
} 

employersImages()


