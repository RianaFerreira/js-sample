/* loops
  for
  while
*/

// FOR loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var names = ["fuzzy", "mojo", "bubbles", "buttercup", "blossom"];
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for(var i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}

// WHILE loop
// iterates while the condition holds true
var i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}


// break out of loops
// stop execution and continue with next iteration
for (var i = 0; i <= 5; i++) {
  console.log(i);

  if (i === 3) {
    break;
  }
}

for (var i = 0; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
