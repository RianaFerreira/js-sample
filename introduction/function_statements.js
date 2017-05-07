/* Function Statements
  DRY code
*/

function calculateAge(argYearOfBirth) {
  var age = 2016 - argYearOfBirth;
  return age;
}

var calcResult = calculateAge(1990);
console.log(calcResult);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement >= 0) {
    console.log(name + " retires in " + retirement + " years.");
  } else {
    console.log("Past retirement age!");
  }
}

yearsUntilRetirement("Riana", 1979);
