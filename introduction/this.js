/* This
  Execution Stack has two phases - creation and execution
  Creation phase - object variable, scope chain creation and sets 'this' keyword
  Every Execution Context Object stores a 'this' variable
  In a regular function call this points to the Global Object (in a browser this refers to the window object)
  In a method call this points to the object that is calling the method
  this is only assigned a value when a function where it is defined is called
*/

// Global Execution Context
// this refers to the window object
console.log(this);

// regular function call
calculateAge(1979);

function calculateAge(year) {
  // this always refers to the global window object
  console.log(2017 - year);
  console.log(this);
}

// object example
var fuzzy = {
  name: "fuzzy",
  yearOfBirth: 1979,
  calculateAge: function() {
    // this refers to the calling object i.e. fuzzy
    console.log(this);
    console.log(2017 - this.yearOfBirth);

    function innerFunction() {
      // this refers to the global window object
      console.log(this);
    }

    innerFunction();
  }
};

// object method call
fuzzy.calculateAge();

// this is only assigned a value when the function it is defined in is called
var mojo = {
  name: "Mojo",
  yearOfBirth: 1981
};

// method borrowing between objects
mojo.calculateAge = fuzzy.calculateAge;
mojo.calculateAge();
