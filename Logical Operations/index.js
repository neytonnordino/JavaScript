// AND operator(&&)

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//   showSolution()
// }

// function showSolution() {
//   console.log("Showing the solution....")
// }

// OR operator(||)

let likesDocumentaries = true
let likesStartups = true

if (likesDocumentaries === true || likesStartups === false) {
  recommendedMovie()
}

function recommendedMovie() {
  console.log("Hey, check out this new film we think you will like it!")
}