// Name: Zac Carpenter
// Date: 9/5/2021
// WEB 115 001 - Object Activity

var pizza = {
  basePrice: 8,
  pricePerTopping: .75,
  toppings: [],

  // Should accept a topping and add it to the toppings array
  addTopping: function(newTopping) {
    this.toppings.push(newTopping);
  },

  // Should accept a topping and remove it from the toppings array
  // You can assume that the topping will exist in the array
  removeTopping: function(deleteTopping) {
   var deleteTopping = this.toppings.indexOf(deleteTopping);
   this.toppings.splice(deleteTopping, 1);
  },

  // Should accept a topping and return true/false if it exists
  hasTopping: function(toppingCheck) {
    var toppingCheck = this.toppings.includes(toppingCheck);
    return toppingCheck;
    // teacher answer: return this.toppings.indexOf(topping) > -1; (or != -1)
    // checks that the index of the topping is not negative one and returns it
  },
  
  // Should return the total price depending on number of toppings plus base price
  // Should be formatted with a dollar sign, for example: $8, $8.75, $9.5, etc
  price: function(price) {
    // added a conditional to ensure the array was not empty 
    if (this.toppings.length > 0) {
      var totalToppings = this.toppings.length;
      var price = this.basePrice + (totalToppings * this.pricePerTopping);
      return(`$${price}`);
    }
    else {
      price = this.basePrice;
      return(`$${price}`);
    }
    // teacher answer: return '$' + (this.basePrice + (this.pricePerTopping * this.toppings.length));
    // this multiplies the length of the array by the pricePerTopping
  },

  // created this function to see my array values, had trouble debugging on my own
  toString: function(toppingName) {
    var toppingName = this.toppings;
    return(`${toppingName}`);
  }
}

// $8
console.log(pizza.price());

// $8.75
pizza.addTopping('tomatos');
console.log(pizza.price());


// $9.5
pizza.addTopping('chicken');
console.log(pizza.price());

/*
// tested some outputs
pizza.removeTopping('tomatos');
pizza.addTopping('mushrooms');
pizza.addTopping('pepperoni');
pizza.addTopping('sausage');
pizza.removeTopping('mushrooms');
*/

// created this to see what's in my array, helped me with debugging
console.log(pizza.toString());

// false
console.log(pizza.hasTopping('beef'));

// true
console.log(pizza.hasTopping('chicken'));

// false
pizza.removeTopping('chicken');
console.log(pizza.hasTopping('chicken'));

// final array items
console.log(pizza.toString());
