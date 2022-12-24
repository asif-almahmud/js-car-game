function start() {
  startScreen.classList.add("hide");
  gameArea.classList.remove("hide");
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
  for (let x = 0; x < 10; x++) {
    let enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.style.marginTop = Math.floor(Math.random() * 900) * -1 + "px";
    enemy.style.marginLeft = Math.floor(Math.random() * 10) * 100 + "px";
    gameArea.appendChild(enemy);
  }

  window.requestAnimationFrame(playGame);

  // create road lines
  const road = gameArea.getBoundingClientRect();
  const numberOfLines = Math.floor(road.height / 200);
  console.log({ numberOfLines });

  for (let x = 0; x < numberOfLines; x++) {
    let line = document.createElement("div");
    line.classList.add("line");
    line.style.marginTop = x * 200 + "px";
    gameArea.appendChild(line);
  }

  window.requestAnimationFrame(playGame);
}

function pressOn(e) {
  e.preventDefault();
  keys[e.key] = true;
  console.log(keys);
}

function pressOff(e) {
  e.preventDefault();
  keys[e.key] = false;
  console.log(keys);
}
