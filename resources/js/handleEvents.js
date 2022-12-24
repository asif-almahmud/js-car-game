function start() {
  startScreen.classList.add("hide");
  gameArea.classList.remove("hide");
  console.log("clicked");
  player.start = true;

  // create car
  let car = document.createElement("div");
  car.innerText = "Car";
  car.setAttribute("class", "car");
  gameArea.appendChild(car);
  player.x = car.offsetLeft;
  player.y = car.offsetTop;
  console.log(player);

  // create road lines
  const road = gameArea.getBoundingClientRect();
  const numberOfLines = Math.floor(road.height / 200);
  console.log({ numberOfLines });

  for (let x = 0; x < numberOfLines; x++) {
    let line = document.createElement("div");
    line.setAttribute("class", "line");
    line.classList.add("line");
    line.style.height = 100 + "px";
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
