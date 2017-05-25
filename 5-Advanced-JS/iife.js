// Immediately invoked function expressions - IIFE
// provides data privacy and keeps code modular


// Function that hides the score variable from outside the function
// - private variable
// variables defined within a function can't be accessed from outside
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// alternative using IIFE
// this is an anonymous function, parser will raise an exception if the
// anonymous function is not enclosed in parenthesis
// trick the parser into thinking it is actually an expression, not a declaration
// what's inside parenthesis can't be a statement, so the anonymous function
// declaration is treated as an expression without raising a parsing error
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// raise error: 'score is not defined'
// console.log(score);

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})( 5);
