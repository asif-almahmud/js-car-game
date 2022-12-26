function playGame() {
  const road = gameArea.getBoundingClientRect();
  const height = road.height;
  const width = road.width;

  moveLines(height);
  moveEnemies(height);

  console.log(road);

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
    if (keys.ArrowRight && player.x < width - 60) {
      player.x += player.speed;
    }

    car.style.left = player.x + "px";
    car.style.top = player.y + "px";

    player.score++;
    score.style.display = "flex";
    score.innerText = `Score: ${Math.round(player.score / 20)}`;

    requestAnimationFrame(playGame);
  }
}

function moveLines(roadHeight) {
  const lines = document.querySelectorAll(".line");

  console.log(lines[0].style.height);

  lines.forEach((line) => {
    if (parseInt(line.style.top) > roadHeight) {
      line.style.top = -100 + "px";
    } else {
      line.style.top = parseInt(line.style.top) + 4 + "px";
      console.log({ marinTop: line.style.top });
    }
  });
}

function moveEnemies(roadHeight) {
  const enemies = document.querySelectorAll(".enemy");
  const car = document.querySelector(".car");

  console.log(enemies[0].style.height);

  enemies.forEach((enemy) => {
    if (isCollided(car, enemy)) {
      console.log("HIT");
      player.start = false;
      start.style.display = "flex";
      start.innerText = "Play Again";
    }
    if (parseInt(enemy.style.top) > roadHeight) {
      enemy.style.top = Math.floor(Math.random() * 900) * -1 + "px";
      enemy.style.left = Math.floor(Math.random() * 10) * 100 + "px";
    } else {
      enemy.style.top = parseInt(enemy.style.top) + 6 + "px";
      // enemy.style.left = Math.floor(Math.random() * 10) * 100 + "px";
      console.log({ marinTop: enemy.style.top });
    }
  });
}
