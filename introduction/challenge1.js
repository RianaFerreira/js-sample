var fuzzyHeight = 160;
var mojoHeight = 170;
var johnnyHeight = 180;

var fuzzyAge = 9;
var mojoAge = 10;
var johnnyAge = 11;

fuzzyResult = fuzzyHeight + 5 * fuzzyAge;
mojoResult = mojoHeight + 5 * mojoAge;
johnnyResult = johnnyHeight + 5 * johnnyAge;

if (fuzzyResult === mojoResult && fuzzyResult === johnnyResult) {
  console.log("It's a draw");
} else if (fuzzyResult > mojoResult && fuzzyResult > johnnyResult) {
  console.log("Fuzzy wins with a score of " + fuzzyResult);
} else if (mojoResult > fuzzyResult && mojoResult > johnnyResult) {
  console.log("Mojo wins with a score of " + mojoResult);
} else {
  console.log("Johnny wins with a score of " + johnnyResult);
}
