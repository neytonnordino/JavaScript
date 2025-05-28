const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const addBtn = document.getElementById("add-btn")



addBtn.addEventListener("click", function() {
  console.log("button clicked")
  if (inputBox.value === '') {
    alert("You must write something")
  } else {
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span) 
  }
  inputBox.value = ""
  addData()
})

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked")
    addData()
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove()
    addData()
  }
}, false)

function addData() {
  localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data")
}

showTask()