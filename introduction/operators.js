/* Operator Precedence
  https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
  *
  +
  -
  NOTE: associativity used for operators with the same precedence value
*/
var now = 2016;
var birthYear = now - 26;
console.log(birthYear);

ageFuzzy = ageJohnny = (3 + 5) * 4 - 6;
console.log(ageFuzzy);
console.log(ageJohnny);

ageJohnny++;
ageFuzzy *= 2;
console.log(ageJohnny);
console.log(ageFuzzy);

// IF conditional logic
var age = 25;
var happy = "yes";

// === operator prevents type coersion
if (happy === "yes") {
  console.log("Fuzzy is a happy " + age + " year old.");
} else {
  console.log("Fuzzy is unhappy");
}

happy = true;

if (happy) {
  console.log("Fuzzy is a happy " + age + " year old.");
} else {
  console.log("Fuzzy is unhappy");
}

if (age <= 19) {
  console.log("Fuzzy is a bunny");
} else if (age >= 20 && age < 30) {
  console.log("Fuzzy is a young rabit");
} else {
  console.log("Fuzzy is a rabit");
}

// SWITCH conditional logic
var job = "teacher";
job = prompt("What does fuzzy do?");

switch (job) {
  case "teacher":
    console.log("Fuzzy teaches kids");
    break;
  case "driver":
    console.log("Fuzzy drives a cab in Brisbane");
    break;
  case "cop":
    console.log("Fuzzy helps fight crime");
    break;
  default:
    console.log("Fuzzy is a beach bum");
}

/* Boolean logic
  AND(&&) => true if all are true
  OR(||) => true if one is true
  NOT(!) => inverts true/false value
*/
var age = 16;

age >= 20;
age < 30;
!(age < 30);

age >= 20 && age < 30;
age >= 20 || age < 30;
