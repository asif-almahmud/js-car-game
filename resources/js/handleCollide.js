function isCollided(playerCar, enemyCar) {
  let playerRect = playerCar.getBoundingClientRect();
  enemyRect = enemyCar.getBoundingClientRect();

  return !(
    playerRect.bottom < enemyRect.top ||
    playerRect.top > enemyRect.bottom ||
    playerRect.right < enemyRect.left ||
    playerRect.left > enemyRect.right
  );
}
