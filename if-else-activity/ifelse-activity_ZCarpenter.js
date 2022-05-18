// Name: Zac Carpenter
// Date: 9/20/2021
// WEB 115 001 - If/Else Activity

/*
* The price per ticket depends on the number of tickets
* purchased, there are 4 ticket pricing tiers. Given the
* number of tickets return the total price, formatted to
* exactly two decimal places with a leading dollar sign.
* Tier 1:
*   Minimum number of tickets: 1
*   Price per ticket: $16.75
* Tier 2:
*   Minimum number of tickets: 4
*   Price per ticket: $14.00
* Tier 3:
*   Minimum number of tickets: 7
*   Price per ticket: $11.00
* Tier 4:
*   Minimum number of tickets: 11
*   Price per ticket: $8.50
*/
function calculateTotalPrice(numberOfTickets) {
  //YOUR CODE STARTS HERE
  numberOfTickets = numberOfTickets; // feedback - You don't need to use the 'this' keyword inside functions - we use this within objects (and their methods). In this case, 'this' is referring to the global scope which isn't intentional. With that being said, your submission meets the requirements.
  var pricePerTicket = 16.75;
  var totalPrice = 0.0;

  if (numberOfTickets >= 1 && numberOfTickets < 4) {
    totalPrice = pricePerTicket * numberOfTickets;
    return (`$${totalPrice.toFixed(2)}`);
  }
  else if (numberOfTickets >= 4 && numberOfTickets < 7) {
    pricePerTicket = 14.00;
    totalPrice = pricePerTicket * numberOfTickets;
    return (`$${totalPrice.toFixed(2)}`);
  }
  else if (numberOfTickets >= 7 && numberOfTickets < 11) {
    pricePerTicket = 11.00;
    totalPrice = pricePerTicket * numberOfTickets;
    return (`$${totalPrice.toFixed(2)}`);
  }
  else {
    pricePerTicket = 8.50;
    totalPrice = pricePerTicket * numberOfTickets;
    return (`$${totalPrice.toFixed(2)}`);
  }

  //YOUR CODE ENDS HERE
}

// $33.50
console.log(calculateTotalPrice(2));

// $56.00
console.log(calculateTotalPrice(4));

// $99.00
console.log(calculateTotalPrice(9));

// $110.50
console.log(calculateTotalPrice(13));

// node ifelse-activity_ZCarpenter.js