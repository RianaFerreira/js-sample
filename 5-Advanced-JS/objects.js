// Object.create method
// allows for more complex inheritance structure
// create objects that inherit from a prototype
// vs
// the Function constructor pattern - creating objects from a blueprint

// Define an object that will act as the prototype
var personProto = {
    calculateAge: function () {
      console.log(2017 - this.yearOfBirth);
    }
};

// Create a new object based on the prototype
var mojo = Object.create(personProto);
mojo.name = "Mojo";
mojo.yearOfBirth = 1979;
mojo.job = "Teacher"


fuzzy = Object.create(personProto,
  {
    name: { value: "Fuzzy"},
    yearOfBirth: { value: 1981 },
    job: {value: "artist" }
  });

// Primitives vs objects
// Variables containing primitives hold the data inside the variable itself
var a = 23;
var b = a;
a = 46;
console.log(a);  // 46
console.log(b);  // 23

// Objects contains a reference to the place in memory where the object is stored
var obj1 = {
  name: "Bubbles",
  age: 26
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);  // 30
console.log(obj2.age);  // 30

// Functions
var age = 27;
var obj = {
  name: "Flow",
  city: "Brisbane"
};

function change(a, b) {
  a = 30;  // primitives don't change the original value
  b.city = "Sydney"; // objects change the object value that it is referencing
}

change(age, obj);
console.log(age);
console.log(obj.city);
