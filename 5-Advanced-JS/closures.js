// Closures
// An inner function always has access to the variables and parameters
// of its outer function, even after the outer function has returned

function retirement(retirementAge) {
  // inner function is able to use this variable
  // closures enable this behaviour
  var a = " years left until retirement";

  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

// assign returned function to variable
var retirementGermany = retirement(65);
var retirementUS = retirement(66);
var retirementIceland = retirement(67);

retirementGermany(1979);
retirementUS(1979);
retirementIceland(1979);

// call function and immediately call the returned function
// retirement(66)(1979);

// determine the interview question for a given job
function interviewQuestion(job) {
  // closure makes the job variable available to the inner function
  // even after the outer function has completed execution

  return function(name) {
    if(job === "designer") {
      console.log(name + ", can you please explain what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach " + name + "?");
    } else {
      console.log("Hello " + name + ", what do you do?");
    }
  }
}

interviewQuestion("teacher")("Mojo");
interviewQuestion("designer")("Fuzz");
interviewQuestion("scientist")("Albert");
