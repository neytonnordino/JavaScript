// const stageEl = document.querySelector(".stage")
// const fightEl = document.getElementById("fight")

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const numbers = "0123456789"

// function fightStage() {
//   let letterIndex = Math.floor(Math.random() * letters.length)
//   let numberIndex = Math.floor(Math.random() * numbers.length)
//   stageEl.textContent = `${letters[letterIndex]} vs ${numbers[numberIndex]}`
// }

// fightEl.addEventListener("click", ()=> {
//   fightStage()
// })

// let age = 18

// const podeEntrar = age >= 18 ? "Sim" : "Não"

// console.log(podeEntrar)

// Verifique se um número é positivo ou negativo

// const numero = -5;

// const resultado = numero < 0 ? "Negativo" : "Positivo"

// console.log(resultado); // Deve imprimir "Negativo"

// Verifique se a pessoa é maior de idade

// const idade = 18;

// const podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode"

// console.log(podeDirigir); // Deve imprimir "Não pode"

// Verifique se a senha é segura (mínimo 8 caracteres)

// const senha = "123456";

// const statusSenha = senha.length >= 8 ? "Forte" : "Senha fraca"

// console.log(statusSenha); // Deve imprimir "Senha fraca"

// Verifique se um número é múltiplo de 3
// const numero = 9;

// const resultado = numero % 3 === 0 ? "Múltiplo de 3" : "Não é múltiplo de 3"

// console.log(resultado); // Deve imprimir "Múltiplo de 3"

// Verifique se o número é par e maior que 10
// const numero = 132;

// const resultado = (numero % 2 === 0 && numero > 10) ? "Válido" : "Inválido"

// console.log(resultado); // Deve imprimir "Válido"


// Mostrar "Bem-vindo, admin" se o usuário for "admin"
// const usuario = "admin";

// const saudacao = usuario === "admin" ? "Bem-vindo, admin" : "Bem-vindo, usuário"

// console.log(saudacao); // Deve imprimir "Bem-vindo, admin"

// Verificar se o produto tem desconto
// const precoOriginal = 100;
// const precoFinal = 80;

// const temDesconto = precoFinal < precoOriginal ? "Desconto aplicado" : "Desconto não aplicado"

// console.log(temDesconto); // Deve imprimir "Desconto aplicado"


// let usuario = []

// for (let i = 0; i < 2; i++) {
//   let nome = prompt(`Digite o nome do usuário ${i + 1}`)
//   let idade = prompt(`Digite a idade de ${nome}:`)
//   usuario.push({ nome, idade })
// }

// let indice = 1
// while (indice < usuario.length) {
//   console.log(`Nome ${usuario[indice].nome}, idade: ${usuario[indice].idade}`)
//   indice++
// }

// let mensagem

// do {
//   mensagem = prompt("Digite uma mensagem (ou 'sair' para encerrar):")
//   console.log("Você digitou: ", mensagem)
// } while (mensagem !== "sair")


// let images = [`😂, 🤣, ❤️, 🍎, 👋, 🍊`]

// for (let i = 0; i < images.length; i++) {
//   console.log(images[i])
// }

// const nomes = ["Lucas", "Ana", "Bruno", "Joana"];

// const maiusculo = nomes.map(nome => nome.toUpperCase())

// const saudacao = nomes.map(nome => "Olá, " + nome)

// const index = nomes.map((nome, indice) => `${indice +1} - ${nome}`)
// console.log(index)

// const produtos = [
//   { nome: "Camisa", preco: 50 },
//   { nome: "Calça", preco: 100 },
//   { nome: "Tênis", preco: 200 }
// ];

// const formatoString = produtos.map((produto) => {
//   let nomeMaiusculo = produto.nome.toUpperCase()
//   let desconto = (produto.preco * 0.9).toFixed(2)
//   return `Produto: ${nomeMaiusculo}, Preço: ${desconto}` 
// })

// console.log(formatoString)

// const produtos = [
//   { nome: "Camisa", preco: 50 },
//   { nome: "Calça", preco: 100 },
//   { nome: "Tênis", preco: 200 },
//   { nome: "Boné", preco: 30 }
// ];

// const baratos = produtos.filter(produto => (produto.preco <= 50))
// console.log(baratos)

// const usuarios = [
//   { nome: "Carlos", idade: 17, cidade: "Maputo" },
//   { nome: "Ana", idade: 22, cidade: "Beira" },
//   { nome: "João", idade: 19, cidade: "Maputo" },
//   { nome: "Luísa", idade: 16, cidade: "Maputo" },
//   { nome: "Marta", idade: 25, cidade: "Nampula" }
// ];

// const moradoresMaiores = usuarios.filter((usuario) => (usuario.idade >= 18 && usuario.cidade === "Maputo"))
// console.log(moradoresMaiores)

// const produtos = [
//   { nome: "Laptop", preco: 50000, emEstoque: true },
//   { nome: "Mouse", preco: 500, emEstoque: true },
//   { nome: "Teclado", preco: 1500, emEstoque: false },
//   { nome: "Monitor", preco: 12000, emEstoque: true },
//   { nome: "Pen Drive", preco: 300, emEstoque: false }
// ];

// const produtosBaratos = produtos.filter((produto) => (produto.emEstoque && produto.preco < 10000)
// )

// console.log(produtosBaratos)

// const usuarios = [
//   { nome: "Carlos", idade: 17, ativo: true },
//   { nome: "Ana", idade: 22, ativo: false },
//   { nome: "João", idade: 19, ativo: true },
//   { nome: "Luísa", idade: 16, ativo: true },
//   { nome: "Marta", idade: 25, ativo: true }
// ];

// const relatorioDeUsuariosAtivos = usuarios
//   .filter(usuario => usuario.ativo && usuario.idade >= 18)
//   .map((lista) => `Usuário ativo: ${lista.nome} (${lista.idade} anos)`)
  

// console.log(relatorioDeUsuariosAtivos)

// const agora = new Date();

// const ano = agora.getFullYear();
// const mes = agora.getMonth() + 1; // +1 porque começa do zero
// const dia = agora.getDate();

// console.log(`Hoje é: ${dia}/${mes}/${ano}`);

// const agora = new Date()


// const dia = agora.getDate()
// const mes = agora.getMonth() + 1
// const ano = agora.getFullYear()
// const hora = agora.getHours()
// const minuto = agora.getMinutes()

// const diaDoAno = `Hoje é: ${dia}/${mes}/${ano} às ${hora}:${minuto}`
// console.log(diaDoAno)

let fruta = "Esparguete"

switch (fruta) {
  case "Maçã":
  case "Banana":
    console.log("frutas")
    break
  case "Chá":
  case "Sumo":
    console.log("Bebidas")
    break
  case "Esparguete":
  case "Pizza":
    console.log("Comidas")
    break
    default:
      console.log("Diverso")
}