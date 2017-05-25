// Function constructor pattern
// blueprint / factory pattern
// params are the variables that need to be set for the object
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

// adding shared method to the Person object's prototype property
// this method will be inherited by all the constructor instances
Person.prototype.calculateAge =
function() {
  console.log(2017 - this.yearOfBirth);
}

// adding shared property to the Person objects' property property
Person.prototype.lastName = "Puff";

// create instance object of the constructor
var blossom = new Person("Blossom", 1981, "Programmer");
blossom.calculateAge();
console.log(blossom.lastName);

var bubbles = new Person("Bubbles", 1982, "Designer");
bubbles.calculateAge();
console.log(bubbles.lastName);

var buttercup = new Person("Buttercup", 1983, "Engineer");
buttercup.calculateAge();
console.log(buttercup.lastName);


// Open a console in the browser and inspect the Person instance objects
// You will see the object parent's prototype
// and the Object object prototype that the Parent class inherits from

// Another example to try in the console
var x = [2,5,6];
console.info(x);
