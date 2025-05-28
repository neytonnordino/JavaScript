// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el");
let clickOnBtn = 0;
let saveEl = document.getElementById("save-el");

function increment() {
  clickOnBtn += 1;
  countEl.textContent = clickOnBtn;
}

function save() {
  let saveNr = clickOnBtn + " - ";
  saveEl.textContent += saveNr;
  countEl.textContent = 0;
  clickOnBtn = 0;
}
