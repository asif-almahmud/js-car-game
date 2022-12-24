function playGame() {
  const road = gameArea.getBoundingClientRect();

  const height = road.height;
  const width = road.width;

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
    if (keys.ArrowRight && player.x < width - 50) {
      player.x += player.speed;
    }

    car.style.left = player.x + "px";
    car.style.top = player.y + "px";

    requestAnimationFrame(playGame);
  }
}
