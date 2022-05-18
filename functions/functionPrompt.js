/*
1. Name: isLucky
Parameters: A number.
Return value: A boolean whether the number passed in can be divided by 7
Example 1 parameter: 13, return value: false
Example 2 parameter: 21, return value: true

2. Name: findLargest
Parameters: An array of numbers
Return value: The largest number in the array
Example 1 parameter: [1,3,7,2], return value: 7
Example 2 parameter: [6, 2, -1, 4], return value: 6

3. Name: monogram
Parameters: Three strings, first, middle, and last names
Return value: The initials FirstLastMiddle
Example 1 parameters: `Sarah`, `Jessica`, `Parker`, return value: SPJ
Example 2 parameters: 'Daphne', 'Ann', 'Blake', return value: DBA
*/

// teacher solution
function isLucky(num) {
    return num % 7 == 0;
}

// teacher solution
function findLargest(nums) {
    var sorted = nums.sort((a, b) => a-b);
    return sorted.pop();
}

function monogram(first, middle, last) {
    //first = first.charAt(0);
    //middle = middle.charAt(0);
    //last = last.charAt(0);
    //console.log(`${first}${last}${middle}`); 

    // rewrote this code after seeing classmates responses
    return `${first.charAt(0)}${last.charAt(0)}${middle.charAt(0)}`;
}

monogram('Zac', 'Andrew', 'Carpenter');
monogram('Sarah', 'Jessica', 'Parker');

function isLucky(number) {
    return number % 7 === 0; 
}
    
console.log(isLucky(22));
console.log(isLucky(28));