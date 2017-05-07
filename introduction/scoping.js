/* Scope Chain
  Scope defines where we can access a certain variable
  Function look up - starts in the function's local scope and moves up to the parents' scope
  Locally scoped variables are not visible to their parent scopes
  Function creates it's own scope - only functions not blocks like Ruby
  Lexical Scoping - the position of the function allows it to have access to
                  the variables & functions defined by the parent function
*/

// Global Scope - default scope
// Accessible from everywhere
var a = "hello";
first();

function first() {
  // Local Scope
  // Lexical Scope allows this function to access the parent scope - global
  var b = "Hi";
  second();

  function second() {
    // Lexical Scope allows this function to access the parents' scope - global and first()
    var c = "Hey";
    console.log(a + b + c);
  }
}

/* Execution Stack vs Scope Chain
  execution stack - order in which functions are called
  scope chain - where functions are lexically written in the code
*/

var a = "Hello";
first();

function first() {
  var b = "Hi";
  second();

  function second() {
    // Is a child of the Global Scope and can therefore the third() function
    var c = "Hey";
    third();
  }
}

function third() {
  // Not a child of the second() function which declares the variable c
  // Therefore can't access the variable
  var d = "Fuzzy";
  console.log(c);
  console.log(a + d);
}
