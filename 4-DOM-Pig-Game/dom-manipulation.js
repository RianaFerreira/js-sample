// DOM Manipulation
// SETTER - DOM element plain text
  document.querySelector("#current-" + activePlayer).textContent = dice;

// SETTER - DOM element
  document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice +"</em>";

// GETTER
//  access the DOM to read an element's value
  var x = document.querySelector("#score-0").textContent;
  console.log(x);

// CSS Update
  document.querySelector(".dice").style.display = none;

/* Events
  Triggered and added to the JavaScript Engine's message queue
*/

/* Event listeners
  Sit and wait for an event to be triggered
  Events can only execute once the execution stack is empty of Execution Contexts
  i.e. all the functions have returned
*/
