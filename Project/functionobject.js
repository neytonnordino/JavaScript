function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`Today i'm going to buy ${this.quantity} ${this.name}`);
  };
}

const newGroceryItem = new GroceryItem("Onion", 5);


function calculatePrice(name, price) {
  return price * name.quantity
}

const perfomeCalculation = calculatePrice

console.log(perfomeCalculation(newGroceryItem, 0.25))