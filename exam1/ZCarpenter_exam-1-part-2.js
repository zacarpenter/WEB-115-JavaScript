/* node ZCarpenter_exam-1-part-2.js
* EXAM 1 PART 2
* COMPLETE SECTIONS 1-5 BELOW (30 points)
*/

/*
* SECTION 1 (8 points):
* Declare a named function that accepts two required parameters
* and one optional parameter that has a default value of 1.
* Your function should return the sum of all three parameters.
* Function name: calculateSum
* Parameters:
*   1) num1: Assume it will be a number
*   2) num2: Assume it will be a number
*   3) num3: Assume it will be a number, default value = 1
* Return:
*   The sum (addition) of num1, num2, and num3
*/

// SECTION 1 CODE STARTS HERE
function calculateSum(num1, num2, num3 = 1) {
    return num1 + num2 + num3;
}
// SECTION 1 CODE ENDS HERE





/*
* SECTION 2 (4 points):
* Call calculateSum (your function) four times, twice with
* the third argument and twice without. Log the result/return
* value of each call. Choose your own argument values.
*/

// SECTION 2 CODE STARTS HERE
console.log(calculateSum(1, 1, 1));
console.log(calculateSum(42, 1001, 7));
console.log(calculateSum(27, 4));
console.log(calculateSum(349, 44));
// SECTION 2 CODE ENDS HERE





/*
* SECTION 3 (8 points):
* Declare an object using literal notation that has the
* following properties and methods.
* Object name: house
* Properties (and values):
*   1) numberOfRooms: Number with the value 3
*   2) squareFeet: Number with the value 1600
*   3) valuePerSqFoot: Number with the value 1.5
*   4) dateBuilt: Date object with the date January 5, 2015
* Methods:
*   1) calculateValue: Returns valuePerSqFoot * squareFeet
*      with a leading $. Example: $100.5
*   2) describeHouse: Logs (does not return) a description of
*       the house using the properties. Example:
*       This house has _ bedrooms with a total of _ square feet.
*       The house was built on _ and currently has a value of _.
*/

// SECTION 3 CODE STARTS HERE
var house = {
    numberOfRooms: 3,
    squareFeet: 1600,
    valuePerSqFoot: 1.5,
    dateBuilt: new Date(`1-5-2015`),

    calculateValue: function() {
        return (`$${this.valuePerSqFoot * this.squareFeet}`);
    },

    describeHouse: function() {
        console.log(`This house has ${this.numberOfRooms} bedrooms with a total of ${this.squareFeet} square feet. This house was built on ${this.dateBuilt.toDateString()} and currently has a value of ${this.calculateValue()}.`);
    }
};

house.describeHouse();

// SECTION 3 CODE ENDS HERE





/*
* SECTION 4 (4 points):
* Without re-declaring your house object, add two new properties
* with the following values.
* Properties (and values):
*   1) state: String with the value 'North Carolina'
*   2) forSale: Boolean with the value false.
*/

// SECTION 4 CODE STARTS HERE
house.state = "North Carolina";
house.forSale = false;

// SECTION 4 CODE ENDS HERE
//console.log(house);




/*
* SECTION 5 (6 points):
* Given an array of students, and number maxClassSize, write
* if/else logic that outputs ONE of the following:
*
* If there are less students than max class size, log:
*   'There are empty seats.'
* If there are more students than max class size, log:
*   'There are too many students.'
* If there are just as many students as max class size, log:
*   'The class is full.'
* If there are no students, log:
*   'The class is empty.'
*
* Notes:
* The value of maxClassSize will always be greater than 0.
* Regardless of the number of students and value of maxClassSize,
* only one log should ever appear.
* Feel free to modify the students array and maxClassSize value.
* When I grade your submission, I will change the array and max
* class size.
*/

// SECTION 5 CODE STARTS HERE
var students = ['Zac', 'Piper'];
var maxClassSize = 2;

if (students.length == 0 ){
    console.log("The class is empty.");
}
else if (students.length < maxClassSize){
    console.log("There are empty seats.");
}
else if (students.length > maxClassSize){
    console.log("There are too many students.");
}
else if (students.length == maxClassSize){
    console.log("The class is full.");
}

// SECTION 5 CODE ENDS HERE
