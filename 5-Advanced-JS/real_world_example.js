// REAL WORLD example
var years = [1979, 1957, 2001, 1981, 1949];

// function that acts like a machine that accepts another function and applies
// it to all elements of the years array
function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2017 - el;
}

// full age varies from country to country
function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
// there is no this value so here it is just a placecholder
// 20 is the preset value
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
