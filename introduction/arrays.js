var names = ["fuzzy", "mojo", "johnny"];
var years = new Array(1979, 1981, 1957);

console.log(names[0]);

// mutate array
names[2] = "bubbles";
console.log(names);

var person = ["buttercup", "puff", 1985, "super hero", false];
person.push("blue"); // append to array
console.log(person);

person.unshift("Miss"); // prepend to array
person.pop();   // remove last array value
person.shift(); // remove first array value
console.log(person);

// statement - only performs an action
console.log(person.indexOf("puff"));
if (person.indexOf("teacher") === -1) {
  console.log("Person is not a teacher");
}
