let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn")
const delBtn = document.getElementById("del-btn")
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") || "[]");

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })

})

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a href='${leads[i]}' target='_blank'>
          ${leads[i]}
        </a>
      </li>`;

    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
  }
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads);
});

delBtn.addEventListener("dblclick", function() {
  console.log("Button double clicked")
  localStorage.clear()
  myLeads = []
  render(myLeads)
})


// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

// shippingCost = 15
// shippingTime = "7-14 days"

// const fullPrice = basePrice - discount + shippingCost

// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
