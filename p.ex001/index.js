let countTo = document.getElementById("count-to");

console.log(countTo);

let clickOnBtn = 0;

function increase() {
  clickOnBtn = clickOnBtn + 1;
  countTo.innerText = clickOnBtn;
}
