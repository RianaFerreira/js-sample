// IFFE - immediately invoked function
// remove the app variables from the global scope

(function() {
  // FUNCTION CONSTRUCTOR
  var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  // Add a methods to the Question Object prototype property
  // This will allow all instances of the Question object to
  // access the prototype property
  Question.prototype.displayQuestion =
    function() {
      console.log(this.question);
      for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
      }
      console.log((this.answers.length) + ": exit");
    };

  Question.prototype.checkResponse =
    function(response, callback) {
      var sc;

      var answer = 'You selected ' + response;

      if (parseInt(response) === this.correctAnswer) {
        console.log(answer + ", that's correct :)");
        sc = callback(true);
        this.displayScore(sc);
        nextQuestion();
      } else if (parseInt(response) === this.answers.length) {
        console.log("Game Over!");
        sc = callback(false);
        this.displayScore(sc);
      } else {
        console.log(answer + ", that's not right :)");
        sc = callback(false);
        this.displayScore(sc);
      }
    };

  Question.prototype.displayScore =
    function(score) {
      console.log('Your current score is: ' + score);
      console.log('*************************');
    }

  // setup all the questions for the game
  var questions = [];
  questions.push(new Question("What is the most delicious beverage?",
                              ["coffee", "tea", "water"], 0));
  questions.push(new Question("What is the most delicious snack?",
                              ["biltong", "popcorn", "chocolate"], 2));
  questions.push(new Question("What is the best holiday?",
                              ["Easter", "Christmas", "New Year"], 1));

  // CLOSURE
  // keep track of the score without using global varaibles
  function score() {
    var the_score = 0;

    return function(correct) {
      if (correct) {
        the_score++;
      }
      return the_score;
    }
  }
  var keepScore = score();

  function nextQuestion() {
    // Display a random question to the player
    q = Math.floor(Math.random() * questions.length);
    questions[q].displayQuestion();

    // Verify the player's response
    response = prompt("Enter your response");
    questions[q].checkResponse(response, keepScore);

    if (parseInt(response) !== questions[q].answers.length) {
      questions[q].checkResponse(response, keepScore);
      nextQuestion();
    }
  }

  nextQuestion();
})();
