const container = document.getElementById("container")


container.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy() {
  container.innerHTML += "<P>Thank you for buying!</P>"
}