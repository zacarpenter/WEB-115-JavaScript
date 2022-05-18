/*
*  Force each of the follow error types to occur
*  and catch them. Log a message describing each
*  of the error types.
*
*  Error types:
*   -SyntaxError (already done)
*   -ReferenceError
*   -TypeError
*   -RangeError
*
*  Additionally, throw your own error with a
*  custom error message containing your name.
*  Catch your error and log a message.
*/
// node try-catch-activity_ZCarpenter.js

console.log('PROGRAM START');

try {
  JSON.parse(`{name: 'John', age: 18}`);
} catch(error) {
  console.log(`Caught a syntax error: `);
  console.log(error);
} 

// YOUR CODE STARTS HERE

// reference error
try {
  console.log(green);
} catch(error) {
  // reference error if height does not exist
  console.log(`Caught a Reference Error: `);
  console.log(error);
}

// type error
try {
  var character = {};
  character.setName(`Zac`);
} catch(error) {
  // type error if function is undefined
  console.log(`Caught a Type Error: `);
  console.log(error);
}

// range error
try {
  var myArray = new Array(-1);
} catch(error) {
  // range error if the function is out of accepted range
  console.log(`Caught a Range Error: `);
  console.log(error);
}

// custom error
var width = 10;
var height = 'nan';
try {
  var area = width * height;
  if(!isNaN(area)) {
    return area;
  } else {
    throw new Error(`Zac Carpenter's Error - unable to calculate area due to invalid width or height`);
  }
  
} catch(error) {
  // try throws a new Error
  console.log(`Caught my own error: `);
  console.log(error);
}

// YOUR CODE ENDS HERE

console.log('PROGRAM END');
