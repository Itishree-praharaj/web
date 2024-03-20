let divTag = document.getElementsByClassName("col");
// let raandomRed = Math.floor(Math.random() * 100 + 1);
let color;
let count = 1;
let red = 1;
let blue = 5;
let green = 10;
let intervalId;
document.getElementById("start").addEventListener("click", function () {
  intervalId = setInterval(function () {
    document.getElementById(
      `${count}`
    ).style.backgroundColor = `rgb(${red},${green},${blue})`;
    console.log(document.getElementById(`${count}`));
    count++;
    red += 15;
    blue += 10;
    green += 5;
  }, 900);
});

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(intervalId);
});
setTimeout(function () {
  clearInterval(intervalId);
}, 48000);
