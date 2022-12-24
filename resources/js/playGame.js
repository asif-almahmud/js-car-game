function playGame() {
  const road = gameArea.getBoundingClientRect();
  const height = road.height;
  const width = road.width;

  move(height);

  console.log(road);

  console.log("from play game");
  let car = document.querySelector(".car");

  if (player.start) {
    if (keys.ArrowUp && player.y > 0) {
      player.y -= player.speed;
    }
    if (keys.ArrowDown && player.y < height - 100) {
      player.y += player.speed;
    }
    if (keys.ArrowLeft && player.x > 0) {
      player.x -= player.speed;
    }
    if (keys.ArrowRight && player.x < width - 70) {
      player.x += player.speed;
    }

    car.style.left = player.x + "px";
    car.style.top = player.y + "px";

    requestAnimationFrame(playGame);
  }
}

function move(roadHeight) {
  const lines = document.querySelectorAll(".line");

  console.log(lines[0].style.height);

  lines.forEach((line) => {
    if (parseInt(line.style.marginTop) > roadHeight) {
      line.style.marginTop = -100 + "px";
    } else {
      line.style.marginTop = parseInt(line.style.marginTop) + 4 + "px";
      console.log({ marinTop: line.style.marginTop });
    }
  });
}
