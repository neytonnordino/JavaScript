// let produtos = [
//   {nome: "camisa", preco: 50},
//   {nome: "calça", preco: 100},
//   {nome: "camisola", preco: 200}
// ]

// let saldoCliente = 250
// let carrinho = []

// function adicionarAoCarrinho(produtos) {
//   carrinho.push(produtos)
// }

// function calcularTotal() {
//   let total = 0
//   for (let i = 0; i < carrinho.length; i++ ) {
//     total += carrinho[i].preco
//   }
//   return total
// }

// function finalizarCompra() {
//   let total = calcularTotal()
//   if (saldoCliente >= total) {
//     console.log("Compra realizada com sucesso!")
//     saldoCliente -= total
//   } else {
//     console.log("Saldo insuficiente.")
//   }
// }

// adicionarAoCarrinho(produtos[0])
// adicionarAoCarrinho(produtos[2])
// finalizarCompra()
// console.log("Saldo total do cliente: ", saldoCliente)

// let frutas = [
//   "Maça", "Banana", "Laranja", "Cereja", "Uva"
// ]
// frutas.push("Abacaxi")
// console.log(frutas[2])

// let livro = {
//   titulo: "Game of Thrones",
//   autor: "JJK Rollings",
//   paginas: 387
// }
// livro.paginas = 500

// console.log(livro.paginas)

// let temCarteira = false

// if (temCarteira != true) {
//   console.log("Não pode dirigir")
// }

// let temRG = true
// let temCPF = true

// if (temRG === true && temCPF === true) {
//   console.log("Pode fazer matrícula")
// }

// let loop = [1, 4, 5, 3, 2, 2]
// let soma = 0

// for (i = 0; i < loop.length; i++) {
//   soma += loop[i]
// }

// console.log("A soma dos números é: ", soma)

// function dobro(numero) {
//   return numero*2
// }

// console.log(dobro(7))

let jogadores = [
  {nome: "Ana", pontos: 0},
  {nome: "Mário", pontos: 0},
  {nome: "Neyton", pontos: 0},
  {nome: "Cidália", pontos: 0}
]

function adicionarPontos() {
  let pontosGanhos = Math.floor(Math.random()*10) * 1
  jogadores.pontos += pontosGanhos
}

function mostrarPontuacao() {
  for (i = 0; i < jogadores.length; i++) {
    console.log(jogadores[i].nome + ": " + jogadores[i].pontos + " pontos")
  }
}

function verificarVencedor() {
  let vencedor = jogadores[0]

  for (i = 0; i < jogadores.length; i++) {
    if (jogadores[i].pontos > vencedor.pontos) {
      vencedor = jogadores[i]
    }
  }
  console.log("O vencedor é: ", vencedor.nome + " com " + vencedor.pontos + " pontos! " )
}

adicionarPontos(jogadores[0])
adicionarPontos(jogadores[1])
adicionarPontos(jogadores[2])

mostrarPontuacoes()
verificarVencedor()