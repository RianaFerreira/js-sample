// Bind, call, and apply methods

var mojo = {
  name: 'Mojo',
  age: 35,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log(
        'Good '+ timeOfDay + ', Ladies and Gentlemen! I\'m ' +
        this.name + ', I\'m a ' +
        this.job + ' and I\'m ' +
        this.age + ' years old.'
      );
    } else if (style === 'friendly') {
      console.log(
        'Hey! What\'s up? I\'m ' +
        this.name + ', I\'m a ' +
        this.job +' and I\'m ' +
        this.age + ' years old. Have a nice ' + timeOfDay + '!'
      );
    }
  }
};

// object does not have the presentation method
var fuzzy = {
  name: 'Fuzzy',
  age: 30,
  job: 'designer'
};

mojo.presentation("formal", "evening");

// call() method example
// known as METHOD BORROWING
// allows you to set the 'this' method explicitly
// Use the presentation method for the emily object
// the first argument for the call method sets the this object for the called method
mojo.presentation.call(fuzzy, "friendly", "morning");

// apply() method example
// also allows method borrowing but the additional
// arguments are passed in as an array
mojo.presentation.apply(fuzzy, ["friendly", "afternoon"]);

// bind() method example
// allows you to set the 'this' method explicitly
// does not immediately invoke the method, instead it creates a copy so that it can be stored
// useful for methods with preset arguments

var mojoFriendly = mojo.presentation.bind(mojo, 'friendly');
mojoFriendly('day');
mojoFriendly('night');

// known as CURRYING
// technique in which you create a function based on another function with some
// preset arguments

var fuzzyFormal = mojo.presentation.bind(fuzzy, 'formal');
fuzzyFormal('afternoon');
