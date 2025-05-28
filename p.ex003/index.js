let num1 = 8
let num2 = 2
let sumEl = document.getElementById("sum-el")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
  let addEl = num1 + num2
  sumEl.textContent = "Sum: " + addEl
  console.log(addEl)
} 

function subtract() {
  let subEl = num1 - num2
  sumEl.textContent = "Sum: " + subEl
  console.log(subEl)
}

function divide() {
  let divEl = num1 / num2
  sumEl.textContent = "Sum: " + divEl
  console.log(divEl)
}

function multiply() {
  let multiEl = num1 * num2
  sumEl.textContent = "Sum: " + multiEl
  console.log(multiEl)
}


