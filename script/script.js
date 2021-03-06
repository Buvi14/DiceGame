let firstPlayerName = "";
let secondPlayerName = "";
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let totalScore = 0;

function checkName() {
  firstPlayerName = document.getElementsByTagName("input")[0].value;
  secondPlayerName = document.getElementsByTagName("input")[1].value;
  if (firstPlayerName === secondPlayerName) {
    document.querySelector(".errorMessage").innerHTML =
      "First and Second Player name should not be same";
  } else {
    document.querySelector(".errorMessage").innerHTML = "";
  }
}

function onSubmit(event) {
  event.preventDefault();
  const formData = document.getElementsByTagName("input");
  firstPlayerName = formData[0].value;
  secondPlayerName = formData[1].value;
  totalScore = formData[2].value;
  document.getElementById("form-container").style.display = "none";
  document.getElementById("board-container").style.display = "block";
  document
    .getElementById("player1")
    .getElementsByClassName("heading")[0].innerHTML = firstPlayerName;
  document
    .getElementById("player2")
    .getElementsByClassName("heading")[0].innerHTML = secondPlayerName;
}

function rollDice(playerIndex) {
  const randomNumber = getRandom();
  const playerNodes = document.getElementById(`player${playerIndex}`);
  playerNodes
    .querySelector(".dice img")
    .setAttribute("src", `./images/dice${randomNumber}.png`);
  switch (playerIndex) {
    case 1:
      firstPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        firstPlayerScore;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player2")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
      break;
    case 2:
      secondPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        secondPlayerScore;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player1")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
      break;
    default:
      break;
  }
  checkIfWinnerExists();
}

function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

function checkIfWinnerExists() {
  if (firstPlayerScore >= totalScore) {
    document.getElementById(
      "player1"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("player2")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
  }
  if (secondPlayerScore >= totalScore) {
    document.getElementById(
      "player2"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("player1")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
  }
}

// function for starting a new game
function newGame() {
  document.getElementById("form-container").reset();
  document.getElementById("form-container").style.display = "flex";
  document.getElementById("board-container").style.display = "none";
  window.location.reload();
}

// Function for restart the current game
function restartTheGame() {
  console.log(document.location);
  document
    .getElementById(`player1`)
    .getElementsByClassName("score")[0].innerHTML = 0;
  document
    .getElementById(`player2`)
    .getElementsByClassName("score")[0].innerHTML = 0;
  firstPlayerScore = 0;
  secondPlayerScore = 0;
  document.querySelectorAll(".dice img")[0].src = "./images/dice1.png";
  document.querySelectorAll(".dice img")[1].src = "./images/dice1.png";
  document.querySelector(".winner").style.display = "none";
  document
    .getElementById("player1")
    .getElementsByTagName("input")[0].disabled = false;
  document
    .getElementById("player2")
    .getElementsByTagName("input")[0].disabled = false;
}
