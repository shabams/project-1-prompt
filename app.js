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

const play = e => {
  console.log(event.target);
  if (firstPlayerTurn == true) {
    e.target.querySelector(".tic").style.display = "flex";
    firstPlayerTurn = !firstPlayerTurn;
  } else {
  }
};

r1c1.addEventListener("click", play);
r1c2.addEventListener("click", play);
r1c3.addEventListener("click", play);

r2c1.addEventListener("click", play);
r2c2.addEventListener("click", play);
r2c3.addEventListener("click", play);

r3c1.addEventListener("click", play);
r3c2.addEventListener("click", play);
r3c3.addEventListener("click", play);
