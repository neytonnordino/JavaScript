const adcTarefa = document.getElementById("adicionar-tarefa")
const listaTarefa = document.querySelector(".lista-de-tarefas")
const inputBox = document.getElementById("text")

adcTarefa.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("Você precisa escrever algo")
  } else {
    const li = document.createElement("li")
    li.innerHTML = inputBox.value

    // Adiciona classes Tailwind para estilizar
    li.className = "flex justify-between items-center bg-gray-200 px-4 py-2 rounded-xl hover:bg-gray-500 transition "

    const span = document.createElement("span")
    span.innerHTML = "\u00d7"
    span.className = "text-red-500 font-bold cursor-pointer hover:scale-110 transition"

    li.appendChild(span)
    listaTarefa.appendChild(li)
  }

  inputBox.value = ""
  storeData()
})

listaTarefa.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove()
    storeData()
  }
})

function storeData() {
  localStorage.setItem("data", listaTarefa.innerHTML)
}

function showData() {
  listaTarefa.innerHTML = localStorage.getItem("data")
}
showData()
