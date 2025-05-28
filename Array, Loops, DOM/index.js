// let sentence = ["Hello", "my", "name", "is", "Neyton"]
// let greetingEl = document.getElementById("greeting-el")


// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += sentence[i] + " "
// }

let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time
  } else if (player2Time < player1Time) {
    return player2Time
  } else {
    return player1Time
  }
}

function getTotalRaceTime() {
  return player1Time + player2Time
}

let fullRaceTime = getTotalRaceTime()
console.log(fullRaceTime)