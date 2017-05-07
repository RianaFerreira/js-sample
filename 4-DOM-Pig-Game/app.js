/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores , roundScore, activePlayer, dice, gamePlaying, prevDice, winningScore;

init();

/* Callback Function
  function btn() {
    // TODO
  }
  btn(); // invokes and runs the function immediately

  https://developer.mozilla.org/en-US/docs/Web/Events
  addEventListener takes the event and the method that needs to be called when
  the event is triggered
  Use btn instead of btn() or it will be invoked and run immediately instead
  of only when the event is triggered
  btn is a callback function because it's called by the event listener when the
  the event is triggered

  document.querySelector(".btn-roll").addEventListener("click", btn);
*/

/* Anonymous function
  If you didn't want to pass a callback function as an arg to the event listener
  you could use an Anonymous function
  * doesn't have a name
  * can't be reused
  * not available outside the scope of the event listener
*/
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    // generate random dice value
    var dice = Math.floor(Math.random() * 6) +1;

    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // !== does not perform data type coercion
    if (dice !== 1) {
      if (dice === 6 && prevDice === 6) {
        prevDice = roundScore = 0;
        setActivePlayerCurrentScore();
        nextPlayer();
      } else {
        prevDice = dice;
        roundScore += dice;
        setActivePlayerCurrentScore();
      }
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;

    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector(".final-score").value;

    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    if (scores[activePlayer] >= winningScore) {
      hideDice();
      setWinner();
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  prevDice = 0;
  gamePlaying = true; // state variable to allow game play to continue

  hideDice();
  clearTotalScore();
  clearCurrentScore();
  setPlayerTitles();
  resetPlayerStates();
}

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  hideDice();
  clearCurrentScore();
  toggleActivePlayer();
}

function hideDice() {
  document.querySelector(".dice").style.display = "none";
}

function clearCurrentScore() {
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
}

function clearTotalScore() {
  // Faster option used to accesses elements by ID
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
}

function setPlayerTitles() {
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
}

function setActivePlayerCurrentScore() {
  document.getElementById("current-" + activePlayer).textContent = roundScore;
}

function resetPlayerStates() {
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

function setWinner() {
  document.getElementById("name-" + activePlayer).textContent = "Winner!";
  document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
  document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
}

function toggleActivePlayer() {
  // document.querySelector(".player-0-panel").classList.remove("active");
  // document.querySelector(".player-1-panel").classList.add("active");
  // Toggle alternative
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
