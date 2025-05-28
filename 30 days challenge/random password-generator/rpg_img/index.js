const passwordBtn = document.getElementById("generate-password")
const passwordBox = document.getElementById("password")
const copyPassword = document.getElementById("copy")
const length = 12
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%&^*_-+=`~/|[]{}"

const allChars = upperCase + lowerCase + number + symbol

function generatePassWord() {
  let password = ""
  password += upperCase[Math.floor(Math.random() * upperCase.length)]
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  password += number[Math.floor(Math.random() * number.length)]
  password += symbol[Math.floor(Math.random() * symbol.length)]

  while(length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)]
  }

  passwordBox.value = password
}

passwordBtn.addEventListener("click", function() {
  generatePassWord()
})

copyPassword.addEventListener("click", function() {
  passwordBox.select()
  document.execCommand("copy")
})

