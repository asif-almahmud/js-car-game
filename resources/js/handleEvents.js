function createGame() {
  // start.classList.add("hide");
  start.style.display = "none";
  gameArea.classList.remove("hide");
  gameArea.innerHTML = "";
  player.score = 0;
  console.log("clicked");
  player.start = true;

  // create car
  let car = document.createElement("div");
  car.setAttribute("class", "car");
  gameArea.appendChild(car);
  player.x = car.offsetLeft;
  player.y = car.offsetTop;
  console.log(player);

  // create enemy cars
  for (let x = 0; x < 15; x++) {
    let enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.style.top = Math.floor(Math.random() * 900) * -1 + "px";
    enemy.style.left = Math.floor(Math.random() * 10) * 100 + "px";
    gameArea.appendChild(enemy);
  }

  // create road lines
  const road = gameArea.getBoundingClientRect();
  const numberOfLines = Math.floor(road.height / 200);
  console.log({ numberOfLines });

  for (let x = 0; x < numberOfLines; x++) {
    let line = document.createElement("div");
    line.classList.add("line");
    line.style.top = x * 200 + "px";
    gameArea.appendChild(line);
  }

  window.requestAnimationFrame(playGame);
}

function pressOn(e) {
  e.preventDefault();
  if ((player.start === false && e.key === "Enter") || e.key === " ") {
    createGame();
  } else {
    keys[e.key] = true;
  }
}

function pressOff(e) {
  e.preventDefault();
  keys[e.key] = false;
}
