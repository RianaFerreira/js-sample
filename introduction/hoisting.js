/* Hoisting
 In the global execution context
 In the creation phase of the Execution Context the Function Declaration
 is store in the Variable Object
 This means that the code that calls the function can be placed before
 the Function Declaration
*/

// Function Decalation example
// is hoisted, so you can call the function before or afer the declaraion
// calculateAge(1979);
function calculateAge(year) {
  // console.log(2017 - year);
}
// calculateAge(1990);

// Function Expression example
// is not hoisted, so you can't call the function before the declaration
// retirement(1979);
var retirement = function(year) {
  // console.log(65 - (2017 - year));
}
// retirement(1979);


// Variables
// In the creation phase of the Execution Context the code is scanned for
// Variable Declarations and they are initialize as 'undefined'
// console.log(age);
var age = 37;  // stored in the Variable Object of the Global Execution Context Object
// console.log(age);

function foo() {
  var age = 40;
  console.log(age); // stored in the Variable Object of the Foo Execution Context Object
}

foo();
console.log(age); // global execution context
