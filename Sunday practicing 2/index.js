let novaTarefa = document.querySelector(".nova-tarefa");
let adicionarTarefa = document.querySelector(".adicionar-tarefa");
const listaTarefa = document.querySelector(".lista-tarefas");

adicionarTarefa.addEventListener("click", function () {
  if (novaTarefa.value === "") {
    alert("Write something");
  } else {
    let valor = novaTarefa.value;
    let li = document.createElement("li");
    li.innerHTML = valor;
    listaTarefa.appendChild(li);
  }
  novaTarefa.value = "";
});

