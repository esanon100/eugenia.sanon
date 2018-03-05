// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.

// Create a function play. It should accept two parameters: humanPlay and computerPlay.

// Write all the code below INSIDE the function curly braces!!

// Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
// For example: "You played rock. The bot played scissors."

// If the human play is equal to the computer play
// Log "You tied. :|" to the console.
// Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
// humanPlay is 'rock' and the computerPlay is 'scissors' OR
// humanPlay is 'scissors' and the computerPlay is 'paper'
// Log "You win! :)" to the console
// Add one to the humanScore variable (be sure to use += )
// Otherwise log "You lose! :(" to the console
// Add one to the computerScore variable (be sure to use += )

// Log "You have {humanScore} points" to the console
// For example: "You have 0 points"
// Log "The bot has {computerScore} points" to the console.
// For example: "The bot has 3 points"

var humanScore = 0;
var computerScore = 0;

document.getElementById("rock").onclick = pickRock;
document.getElementById("scissors").onclick = pickScissors;
document.getElementById("paper").onclick = pickPaper;

function pickRock() {
  play("rock");
}

function pickScissors() {
  play("scissors");
}

function pickPaper() {
  play("paper");
}

function play(humanScore) {
  var computerScore = getcomputerScore();

  if (humanScore == "rock") {
    if (computerScore == "rock") {} else if (computerScore == "scissors") {
      humanScore++;
    } else if (computerScore == "paper") {
      computerScore++;
    }
  } else if (humanScore == "scissors") {
    if (computerScore == "scissors") {} else if (computerScore == "paper") {
      humanScore++;
    } else if (computerScore == "rock") {
      computerScore++;
    }
  } else if (humanScore == "paper") {
    if (computerScore == "paper") {} else if (computerScore == "scissors") {
      computerScore++;
    } else if (computerScore == "rock") {
      humanScore++;
    }
  }
}

function getcomputerScore() {
  var randomplay = ["rock", "paper", "scissors"];
  var play = randomplay[Math.floor(Math.random() * randomplay.length)];
  return play;
}
// END OF FUNCTION (Place the closing curly brace here!)

// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.


// BONUS:
// Create a "best of 3" version

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.
// all statements go inside curly braces
