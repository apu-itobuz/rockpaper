const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const weapon = document.getElementById("weapon");
const play = document.getElementById("play");

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let pScore = 0;
let cScore = 0;

function isGameOver() {
  return pScore >= 3 || cScore >= 3;
}
//----------

function computerPlay() {
  const computerOptions = ["rock", "paper", "scissors"];
  const choiceNumber = Math.floor(Math.random() * computerOptions.length);

  return computerOptions[choiceNumber];
}
//-------------
rock.addEventListener("click", () => {
  if (isGameOver()) return;
  let computerChoice = computerPlay();
  let playerChoice = "rock";
  if (playerChoice === computerChoice) {
  } else if (computerChoice == "paper") {
    console.log("Computer Won");
    cScore++;
    computerScore.innerHTML = "computer score = " + cScore;
  } else {
    console.log("Player Won");
    pScore++;
    playerScore.innerHTML = "player score = " + pScore;
  }

  if (pScore >= 3 || cScore >= 3) {
    weapon.innerHTML = "game over";
  }
});
//------------------
paper.addEventListener("click", () => {
  if (isGameOver()) return;
  let computerChoice = computerPlay();
  let playerChoice = "paper";
  if (playerChoice === computerChoice) {
    console.log("Tie");
    console.log("Computer" + cScore);
    console.log("Player" + pScore);
  } else if (computerChoice == "rock") {
    console.log("Player Won");
    pScore++;
    playerScore.innerHTML = "player score = " + pScore;
  } else {
    console.log("Computer Won");
    cScore++;
    computerScore.innerHTML = "computer score = " + cScore;
  }
  if (pScore >= 3 || cScore >= 3) {
    weapon.innerHTML = "game over";
  }
});
//-----------------
scissors.addEventListener("click", () => {
  if (isGameOver()) return;
  let computerChoice = computerPlay();
  let playerChoice = "scissors";
  if (playerChoice === computerChoice) {
    console.log("Tie");
    console.log("Computer" + cScore);
    console.log("Player" + pScore);
  } else if (computerChoice == "rock") {
    console.log("Player Won");
    pScore++;
    playerScore.innerHTML = "player score = " + pScore;
  } else {
    console.log("Computer Won");
    cScore++;
    computerScore.innerHTML = "computer score = " + cScore;
  }
  if (pScore >= 3 || cScore >= 3) {
    weapon.innerHTML = "game over";
  }
});
