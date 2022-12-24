const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");

for (let x = 0; x < 4; x++) {
  let line = document.createElement("div");
  line.setAttribute("class", "line");
  line.classList.add("line");
  line.style.marginTop = x * 150 + "px";
  gameArea.appendChild(line);
}

startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
