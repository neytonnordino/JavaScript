function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`Today i'm going to buy ${this.quantity} ${this.name}`);
  };
}

const newGroceryItem = new GroceryItem("Onion", 5);
newGroceryItem.display();
