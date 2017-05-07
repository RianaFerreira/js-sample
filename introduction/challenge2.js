function printfullAge(years) {
  var ages = [];
  var fullAges = [];

  for (var i = 0; i < years.length; i++) {
    ages[i] = 2017 - years[i];
  }

  for (var i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      console.log("This person is of full age " + ages[i]);
      fullAges.push(true);
    } else {
      console.log("This person is NOT of full age " + ages[i]);
      fullAges.push(false);
    }
  }

  return fullAges;
}

var years = [1979, 1981, 2015, 2010];
var full_1 = printfullAge(years);
var full_2 = printfullAge([1981, 2010]);
