let upBtn = document.getElementById("up");
let downBtn = document.getElementById("down");
let rightBtn = document.getElementById("right");
let leftBtn = document.getElementById("left");

let ball = document.getElementById("image");
let topPosition = 100;
let leftPosition = 697;
upBtn.addEventListener("click", function () {
  if (topPosition > 0) {
    topPosition -= 10;
    ball.style.top = `${topPosition}px`;
  }
});
downBtn.addEventListener("click", function () {
  if (topPosition >= 0) {
    topPosition += 10;
    ball.style.top = `${topPosition}px`;
  }
});
leftBtn.addEventListener("click", function () {
  if (leftPosition > 0) {
    leftPosition -= 10;
    ball.style.left = `${leftPosition}px`;
  }
});
rightBtn.addEventListener("click", function () {
  if (leftPosition >= 0) {
    leftPosition += 10;
    ball.style.left = `${leftPosition}px`;
  }
});
