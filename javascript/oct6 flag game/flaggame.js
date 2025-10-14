function resetscore() {
  if (confirm("Are you sure you want to reset the game?")) {
    location.reload();
  }
}

const winnerMessage = document.getElementById("winner-message");

const score1 = document.getElementById("count1");
const score2 = document.getElementById("count2");

const redSide = document.getElementById("redside");
const blueSide = document.getElementById("blueside");

const winSound = new Audio("final-fantasy-vii-victory-fanfare-1.mp3");

redSide.style.width = "50%";
blueSide.style.width = "50%";

let gameOver = false;

function checkWinner() {
  const redScore = Number(score1.innerHTML);
  const blueScore = Number(score2.innerHTML);

  if (redScore - blueScore > 10) {
    winnerMessage.textContent = "🔴 Red side wins!";
    gameOver = true;
    winSound.volume = 0.3;
    winSound.play();
    setTimeout(() => {
      winSound.pause();
    }, 4700);
  } else if (blueScore - redScore > 10) {
    winnerMessage.textContent = "🔵 Blue side wins!";
    gameOver = true;
    winSound.volume = 0.3;
    winSound.play();
    setTimeout(() => {
      winSound.pause();
    }, 4700);
  }
}

function side1() {
  if (gameOver) return;
  score1.innerHTML = Number(score1.innerHTML) + 1;
  let currentWidth = Number(redSide.style.width.replace("%", ""));
  redSide.style.width = currentWidth + 5 + "%";
  checkWinner();
}

function side2() {
  if (gameOver) return;
  score2.innerHTML = Number(score2.innerHTML) + 1;
  let currentWidth = Number(blueSide.style.width.replace("%", ""));
  blueSide.style.width = currentWidth + 5 + "%";
  checkWinner();
}

document.addEventListener("keydown", function (event) {
  if (gameOver) return;

  if (event.key === "a" || event.key === "A") {
    side1();
  } else if (event.key === "s" || event.key === "S") {
    side2();
  }
});
