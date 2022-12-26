const score = document.querySelector(".score");
const start = document.querySelector(".start");
const gameArea = document.querySelector(".gameArea");

start.addEventListener("click", createGame);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
