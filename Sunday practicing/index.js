// function mostrarTabuada(numero) {
//   for(let i = 0; i <= 10; i++) {
//     console.log(`${numero} * ${i}`)
//   }
// }

// mostrarTabuada(5)

// function mostrarNome(nome) {
//   console.log("Bom dia " + nome)
// }
// mostrarNome("Neyton")


// function criarIdade() {
//   const idade = 1
//   if (idade < 18) {
//     console.log("Menor de idade")
//   } else {
//     console.log("Maior de idade")
//   }
// }
// criarIdade()

// function dobroDeNumero(n1, n2) {
//   return n1 + n2
// }

// let dobro = dobroDeNumero(5, 2)

// console.log(dobro)

// function calcularMedia(n1, n2, n3){
//   return (n1 + n2 + n3)/3
// }

// let media = calcularMedia(15, 18, 15)
// console.log(media)

// function ehPar(numero) {
//   return numero % 2 === 0
// }
// console.log(ehPar(6))

function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3)/3
}



function mostrarSituacao(nome, nota1, nota2, nota3) {
  let media = calcularMedia(nota1, nota2, nota3)
  if (media >= 6) {
    console.log(`${nome} está aprovado`)
  } else {
    console.log(`${nome} Está reprovado`)
  }
}

mostrarSituacao("Neyton")