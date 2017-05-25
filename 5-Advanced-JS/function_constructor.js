// Create object from an object literal
var mojo = {
  name: "Mojo",
  yearOfBirth: 1979,
  job: "teacher"
};

// Function constructor
// blueprint / factory pattern
// params are the variables that need to be set for the object
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function() {
    console.log(2017 - this.yearOfBirth);
  };
};

// create instance object of the constructor
var pete = new Person("Pete", 1981, "brickie");
