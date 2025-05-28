function GroceryItem(name, quantity) {
  this.name = name,
  this.quantity = quantity,
  this.display = function() {
    console.log(`${this.quantity} * ${this.name}`)
  }
}

const newItem = new GroceryItem('Banana', 5)
newItem.groceryAisle = 'Produce'

console.log(newItem)
