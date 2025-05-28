const submitBtn = document.getElementById("submit-btn")
const span = document.querySelector(".span")

submitBtn.addEventListener("click", ()=> {
  span.style.display = "block"
  setTimeout(function() {
    span.innerHTML = ""
  },5000)
})