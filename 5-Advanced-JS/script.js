// Everything is an object
// Primitives are not objects: Numbers, Strings, Booleans, Undefined, Null
// vs
// Everything else is an object:
//  Arrays, Functions, Objects, Dates, Wrappers for Numbers, Strings, Booleans

// NOTE:
// 1) Every JS object has a prototype property, which makes inheritance possible
// 2) The prototype property of an object is where we put metods and properties
//    that we want other objects to inherit
// 3) The constructor's prototype property is no the prototype of the constructor
//    It is the prototype of ALL instances of the constructor
// 4) When a method (or property) is called, the method lookup starts in the object
//    and moves onto the object's prototype. This continues to the object's parent
//    up the prototype chain to the NULL Object until the method is found.

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
};

// create instance object of the constructor
var pete = new Person("Pete", 1981, "brickie");
