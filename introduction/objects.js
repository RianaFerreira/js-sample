/* Objects
  key value pairs
*/

// Object literal
var person = {
  name: "Bubbles",
  lastName: "Puff",
  yearOfBirth: 1979,
  job: "Programmer",
  isMarried: false
};

console.log(person);
console.log(person.lastName); // dot notation
console.log(person["lastName"]); // bracket notation

var keyName = "job";
console.log(person[keyName]);

// object mutation
person.job = "Designer";
person["job"] = "Actor";
console.log(person);

// alternate way to create an object
var other = new Object();
other.name = "Mojo";
other.lastName = "Jojo";
other["yearOfBirth"] = 1981;
other["job"] = "Clown";
other["isMarried"] = true;
console.log(other);

// v1.0
var fuzzy = {
  name: "Fuzzy",
  yob: 1979,
  job: "teacher",
  isMarried: false,
  family: ["bubbles", "blossom", "buttercup"],
  calculateAge: function() {
    // function expression - produces an output that's assigned to the object
    return 2016 - this.yob;
  }
};

console.log(fuzzy);
console.log(fuzzy.family[1]);
console.log(fuzzy.calculateAge());

var age = fuzzy.calculateAge();
fuzzy.age = age;
console.log(fuzzy);

// v2.0
var fuzzy = {
  name: "Fuzzy",
  yob: 1979,
  job: "teacher",
  isMarried: false,
  family: ["bubbles", "blossom", "buttercup"],
  calculateAge: function() {
    // function expression - produces an output that's assigned to the object
    this.age = 2016 - this.yob;
  }
};

fuzzy.calculateAge();
console.log(fuzzy);
