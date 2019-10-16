// Welcome

const r1c1 = document.querySelector(".r-1-c-1");
const r1c2 = document.querySelector(".r-1-c-2");
const r1c3 = document.querySelector(".r-1-c-3");
const r2c1 = document.querySelector(".r-2-c-1");
const r2c2 = document.querySelector(".r-2-c-2");
const r2c3 = document.querySelector(".r-2-c-3");
const r3c1 = document.querySelector(".r-3-c-1");
const r3c2 = document.querySelector(".r-3-c-2");
const r3c3 = document.querySelector(".r-3-c-3");

const circleScore = document.querySelector("#circle-score");
const xScore = document.querySelector("#x-score");

const resetButton = document.querySelector("#reset");
const anotherMatchButton = document.querySelector("#another-match");
const newGameButton = document.querySelector("#new-game");

const gameHistory = {
  circlePlays: [],
  xPlays: []
};

// const gameScores = {
//   circle: 0,
//   x: 0
// };
if (window.localStorage.length == 0) {
  window.localStorage.setItem("x", 0);
  window.localStorage.setItem("o", 0);
}
circleScore.innerText = localStorage.getItem("o");
xScore.innerText = localStorage.getItem("x");

//  variables
let firstPlayerTurn = true;
let counter = 0;

const play = e => {
  // Sound played when each player make a move.
  const playSound = new Audio("./click-sound.mp3");
  playSound.play();

  //
  const circle = e.target.querySelector(".tic");
  const x = e.target.querySelector("p");
  const location = e.target.getAttribute("id");

  e.target.removeEventListener("click", play);

  if (firstPlayerTurn == true && circle) {
    document.querySelector("#circle-team").style.backgroundColor = "green";
    document.querySelector("#circle-team").style.opacity = ".3";

    // show circle
    circle.style.display = "flex";

    // Record user-input
    gameHistory.circlePlays.push(location);

    console.log("this is the game history", gameHistory);

    firstPlayerTurn = !firstPlayerTurn;
    whoWon("circle");
  } else if (firstPlayerTurn == false && x) {
    x.style.display = "flex";

    firstPlayerTurn = !firstPlayerTurn;
    // Record user-input
    gameHistory.xPlays.push(location);

    whoWon("x");
  }
};

const whoWon = winner => {
  counter++;
  // win situations:
  const case1 = [1, 2, 3];
  const case2 = [4, 5, 6];
  const case3 = [7, 8, 9];
  const case4 = [1, 4, 7];
  const case5 = [2, 5, 8];
  const case6 = [3, 6, 9];
  const case7 = [1, 5, 9];
  const case8 = [3, 5, 9];
  const allCases = [case1, case2, case3, case4, case5, case6, case7, case8];
  // win switch
  let didWin = false;
  let check;
  if (winner == "x") {
    check = "xPlays";
  } else if (winner == "circle") {
    check = "circlePlays";
  }
  for (let i = 0; i < allCases.length; i++) {
    let currentCase = allCases[i];
    didWin = currentCase.every(c => {
      return gameHistory[check].includes(`${c}`);
    });
    console.log("didWin====", winner, didWin);
    if (didWin == true) break;
  }

  if (didWin == true) {
    // Add new point to the x team  || gameScores.x++;
    let oldXScore = window.localStorage.getItem("x");

    let oldOScore = window.localStorage.getItem("o");
    if (winner == "x") window.localStorage.setItem("x", Number(oldXScore) + 1);
    // Add new point to the circle team || gameScores.circle++
    if (winner == "circle")
      window.localStorage.setItem("o", Number(oldOScore) + 1);

    // update score on the page
    circleScore.innerText = localStorage.getItem("o");
    xScore.innerText = localStorage.getItem("x");

    console.log(`${winner} has Won`);
    // See what the players want to do? yea > reset and keep score, or clear all

    let answer = window.confirm(
      `${winner} has already won. Do you want to keep playing ?`
    );
    removeAll();
    if (answer == true) resetGame();
  }
  if (counter == 9) {
    console.log(`It is a tie!`);
    let answer = window.confirm(
      `It is a tie. Do you guys want to keep playing ?`
    );
    if (answer == true) resetGame();
    if (answer == false) newGame();
  }
};

const updateScores = () => {
  circleScore.textContent = gameScores.circle;
  xScore.textContent = gameScores.x;
};

const newGame = () => {
  resetGame();
  resetScores();
};

const resetScores = () => {
  window.localStorage.setItem("x", 0);
  window.localStorage.setItem("o", 0);
  circleScore.innerText = localStorage.getItem("o");
  xScore.innerText = localStorage.getItem("x");
};

const resetGame = () => {
  hideAll();
  watchOut();
  clearHistory();
  clearCounter();
};

const clearCounter = () => {
  counter = 0;
};

const clearHistory = () => {
  gameHistory.circlePlays = [];
  gameHistory.xPlays = [];
};

const hideAll = () => {
  const allCircles = document.querySelectorAll(".tic");
  const allXs = document.querySelectorAll("p");
  const allOfIt = [];
  allOfIt.push(...allCircles);
  allOfIt.push(...allXs);
  console.log(allOfIt);

  for (let i = 0; i < allOfIt.length; i++) {
    const element = allOfIt[i];
    element.style.display = "none";
  }
  console.log("allofit======", allOfIt);
};

const removeAll = () => {
  r1c1.removeEventListener("click", play);
  r1c2.removeEventListener("click", play);
  r1c3.removeEventListener("click", play);

  r2c1.removeEventListener("click", play);
  r2c2.removeEventListener("click", play);
  r2c3.removeEventListener("click", play);

  r3c1.removeEventListener("click", play);
  r3c2.removeEventListener("click", play);
  r3c3.removeEventListener("click", play);
};

const watchOut = () => {
  r1c1.addEventListener("click", play);
  r1c2.addEventListener("click", play);
  r1c3.addEventListener("click", play);

  r2c1.addEventListener("click", play);
  r2c2.addEventListener("click", play);
  r2c3.addEventListener("click", play);

  r3c1.addEventListener("click", play);
  r3c2.addEventListener("click", play);
  r3c3.addEventListener("click", play);
  resetButton.addEventListener("click", resetGame);
  anotherMatchButton.addEventListener("click", resetGame);
  newGameButton.addEventListener("click", newGame);
};

watchOut();
