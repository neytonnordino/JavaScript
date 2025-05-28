// let firstName = "Neyton Nordino"
// let lastName = "Nhatave"
// let fullName = firstName + " " + lastName

// console.log(fullName)

// let call = "Linda";
// let greeting = "Hi there";

// function hello() {
//   console.log(greeting + ", " + call + "!");
// }

// hello();

/* <>Exercice 2</> */

// let myPoints = 3

// function add3Points() {
//   myPoints += 3
// }

// function remove1Point() {
//   myPoints-= 1
// } 

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints)

/* <>Exercise 3</> */

// let frase = "Hoje o dia está lindo!"
// console.log(frase.length)
// console.log(frase.toUpperCase())
// console.log(frase.replace("lindo", "ensolarado"))

/* <>Exercice 4</> */

// let valorNulo = null
// let valorIndefinido; 

// console.log(valorNulo)
// console.log(valorIndefinido)

/* <>Exercice 5</> */

// function saudacao(nome) {
//   let saudacaoEl = prompt(document.getElementById("saudacao-el"))
//   saudacaoEl.textContent = "Olá, " + nome + "! Bem-vinda ao curso de JavaScript."
//   console.log(saudacaoEl.ome)
// }

// saudacao()


// saudacao("Neyton")

/* <>Exercice 6</> */

// function soma(a, b) {
//   return a + b
// }
// let resultado = soma(5, 7)
// console.log("o resultado da soma é: " + resultado)

/* <>Exercice 7</> */

// function verificarIdade(idade) {
//   if (idade >= 18) {
//     console.log("voce é maior de idade.")
//   }
//   else {
//     console.log("voce é menor de idade.")
//   }
// }

// verificarIdade(18)

/* <>Exercice 8</> */

// let frase = prompt("Digite uma frase: ")
// console.log("A sua frase tem " + frase.length + " caracteres. ")

/* <>Exercice 9</> */

// function juntarNome(primeiroNome, sobrenome) {
//   return primeiroNome + " " + sobrenome
// }

// let nomeCompleto = juntarNome("Neyton", "Nhatave")
// console.log("O nome completo é: " + nomeCompleto)

/* <>Exercise 10</> */

function converterCelsiusParaFahrenheit(celcius) {
  return celcius * 1.8 + 32
}

let temperaturaF = converterCelsiusParaFahrenheit(30)
console.log("A temperatura em F é: " + temperaturaF)