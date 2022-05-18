// Name: Zac Carpenter
// Date: 10/11/2021
// WEB 115 001 - Short-Circuit Activity

// PART 1
// Use truthy/falsy and short circuit concepts to console log 'Welcome'
// if a user is logged in. You should use || or &&. NO if/else.
// Toggle isLoggedIn to test.
var isLoggedIn = true;

// YOUR CODE STARTS HERE
var user = isLoggedIn && 'Welcome';
console.log(user);
// YOUR CODE ENDS HERE


// PART 2
// Use truthy/falsy and short circuit concepts to console log
// 'You must be 13 or older' if the user is under 13.
// You should use || or &&. NO if/else. Adjust user to test.
var user = {
  name: `John`,
  age: 9,
  username: `john07`
}

// YOUR CODE STARTS HERE
var message = user.age > 12 || 'You must be 13 or older';
console.log(message);
// YOUR CODE ENDS HERE


// PART 3
// Use truthy/falsy and short circuit concepts to set a
// default value of 'mutt' to a variable named dogBreed
// if the dog's breed is not set (falsy: empty, null, undefined).
// NO if/else. Adjust dog to test.
var dog = {
  age: 3,
  breed: undefined,
  vaccinated: true,
  adopted: false,
  adoptionFee: 200
}

// YOUR CODE STARTS HERE
var dogBreed = dog.breed || 'mutt';
console.log(dogBreed);
// YOUR CODE ENDS HERE

// node short-circuit_ZCarpenter.js