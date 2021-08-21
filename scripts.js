let rpc = ["Rock", "Paper", "Scissors"];
let playercount = 0;
let computercount = 0;

//Randomly selects a member of rpc array
function computerPlay() {
  let computerSelection = rpc[Math.floor(Math.random() * 3)];
  return computerSelection;
}
const body = document.querySelector("body");
//Container-begin
const container = document.createElement("div");
body.appendChild(container);

const buttonRock = document.createElement("button");
buttonRock.setAttribute("id", "Rock", "class", "gameButton");
buttonRock.setAttribute("class", "gameButton");
buttonRock.textContent = "Rock";
container.appendChild(buttonRock);

const buttonScissors = document.createElement("button");
buttonScissors.setAttribute("id", "Scissors", "class", "gameButton");
buttonScissors.setAttribute("class", "gameButton");
buttonScissors.textContent = "Scissors";
container.appendChild(buttonScissors);

const buttonPaper = document.createElement("button");
buttonPaper.setAttribute("id", "Paper");
buttonPaper.setAttribute("class", "gameButton");
buttonPaper.textContent = "Paper";
container.appendChild(buttonPaper);
container.appendChild(currentResults);
//CONTAINER-END

//END SCREEN BEGIN
const endScreen = document.createElement("div");
const restartButton = document.createElement("button");
restartButton.setAttribute("id", "restartButton");
restartButton.textContent = "Start the game anew";

//On click resets the score values, removes the end screen, adds the game screen back, updates score display.
restartButton.addEventListener("click", function () {
  playercount = 0;
  computercount = 0;
  body.removeChild(endScreen);
  body.appendChild(container);
  container.removeChild(result);
  const currentResults = document.createElement("div");
  currentResults.style = "Black";
  currentResults.textContent = `Current score is PLR ${playercount}:${computercount} BOT`;
  updateResults();
});
const result = document.createElement("p");
const currentResults = document.createElement("div");
currentResults.style = "Black";
currentResults.textContent = `Current score is PLR ${playercount}:${computercount} BOT`;

//invoked by updateResults(), depending on the argument displays appropriate message, removes the main game screen and displays the end screen.
function gameResults() {
  body.removeChild(container);
  if (arguments[0] == "win") {
    endScreen.textContent = `Congratulations, you have won the game with the score of ${playercount} to ${computercount}`;
  } else if (arguments[0] == "lose") {
    endScreen.textContent = `The computer has won the game with the score of ${computercount} to ${playercount}. Better luck next time!`;
  }
  body.appendChild(endScreen);
  endScreen.appendChild(restartButton);
}
//Updates game results, if either score reaches a value of 5 => invokes gameResults()
function updateResults() {
  currentResults.textContent = `Current score is PLR ${playercount}:${computercount} BOT`;
  if (playercount >= 5) {
    gameResults("win");
  } else if (computercount >= 5) {
    gameResults("lose");
  }
}

//If the computer has lost, displays appropriate messages and updates the score values.
function roundWin() {
  result.style.color = "Green";
  result.textContent = "You win!";
  container.appendChild(result);
  playercount += 1;
  updateResults();
}
//Same as roundWin() but if the computer has won.
function roundLose() {
  result.style.color = "Red";
  result.textContent = "You lost!";
  container.appendChild(result);
  computercount += 1;
  updateResults();
}
//Displays the appropriate message if the round turns out to a draw.
function roundDraw() {
  result.style.color = "Grey";
  result.textContent = "It's a DRAW";
  container.appendChild(result);
}
//querry for class .gameButton
const btn = document.querySelectorAll(".gameButton");
//listener for the rock,paper,scissors buttons, invokes playRound with the id of the button that was clicked, also invokes computerPlay() as an argument to playRound()
btn.forEach((button) => {
  button.addEventListener("click", function (e) {
    playRound(e.target.id, computerPlay());
  });
});
//INvoked by rpc buttons, compares the selections of the player and AI, then calls the appropriate function.
function playRound(playerSelection, computerSelection) {
  //Draw condition
  if (playerSelection == computerSelection) {
    roundDraw();
  }
  //Win condition
  else if (
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    roundWin();
  }
  //Lose condition
  else roundLose();
}
