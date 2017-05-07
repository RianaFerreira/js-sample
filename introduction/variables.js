 /*
 variables camelcase
 5 primitive datatypes (number, string, boolean, undefined, null)
 primitive - not objects
 undefined - var does not have a value yet
 null - non existent
 Dynamic type - js quesses the data type of a variable
*/
var name = "Fuzzy";
var lastName = "lumpkin";
var age = 26;
var fullAge = true;

// debugging tool
console.log(name + 26);

/*  Type Coercion
  console.log(name + 26); => "Fuzzy26"
  type converted to string
  23 == "23" => true, operator allows type coersion
  23 === "23" => false, operator prevents type coersion
*/

// unintialized variables of undefined datatypes
var job, isMarried;
console.log(job);

job = "teacher";
console.log(name + " " + job);

/*  Variable Mutation
  changing the value of an initalized variable
*/
job = "programmer";
console.log(name + " " + job);

// get data from console for debugging
var lastName = prompt("What is the last name?");
console.log("Confirmed " + lastName);
alert("Confirmed " + lastName);

/*
  undefined, 0, null or "" are COERCED to false
  any other value is COERCED to true
*/
