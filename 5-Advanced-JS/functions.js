// First class JS functions - they are effectively objects
// Functions are also objects
// instance of the Object type
// function behaves like an object
// store functions in a variable
// pass a function as an argument to another function
// return a function from a function



// pass function as an argument
var years = [1979, 1958, 1981, 2010, 1997];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  // element represents the yearOfBirth
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

// functions that return functions
function interviewQuestion(job) {
  if (job === "designer") {
    // return an anonymous function - it doesn't have a name
    return function(name) {
      console.log(name + ", can you please explain what UX design is?");
    }
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach, " + name + "?");
    }
  } else {
    return function(name) {
      console.log("Hello " + name + " what do you do?");
    }
  }
}

// assign the returned function to a variable
var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");
var otherQuestion = interviewQuestion("astronaut")

// call the anonymous function
teacherQuestion("Fuzzy");
designerQuestion("Bubbles");
otherQuestion("Johnny");

// call the anonymous function without assigning it to a variable
interviewQuestion("Proffessor")("Mojo");
