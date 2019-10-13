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

let firstPlayerTurn = true;
const map = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

const play = e => {
  const circle = e.target.querySelector(".tic");
  const x = e.target.querySelector("p");
  const location = e.target
    .getAttribute("class")
    .split(" ")[0]
    .split("-");
  console.log(location);
  const row = location[1];
  const column = location[3];

  if (firstPlayerTurn == true && circle) {
    circle.style.display = "flex";
    map[row - 1][column - 1] = 1;
    console.log(map);
    if (x) x.remove();
    firstPlayerTurn = !firstPlayerTurn;
  } else if (firstPlayerTurn == false && x) {
    x.style.display = "flex";
    map[row - 1][column - 1] = 2;
    if (circle) circle.remove();
    firstPlayerTurn = !firstPlayerTurn;
  }
};

const whoWon = () => {};

for (let i = 0; i < 3; i++) {}

r1c1.addEventListener("click", play);
r1c2.addEventListener("click", play);
r1c3.addEventListener("click", play);

r2c1.addEventListener("click", play);
r2c2.addEventListener("click", play);
r2c3.addEventListener("click", play);

r3c1.addEventListener("click", play);
r3c2.addEventListener("click", play);
r3c3.addEventListener("click", play);
