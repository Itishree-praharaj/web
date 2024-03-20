let startButton = document.getElementById("startbtn");
let resetButton = document.getElementById("resetbtn");
let stopButton = document.getElementById("stopbtn");
let clik = false;
let min = 20;
let sec = 0;
let msec = 0;
document.getElementById(
  "timerdisplay"
).innerHTML = `<span id="min">${min}:</span><span id="sec">${sec}:</span><span
id="msec">${msec}</span>`;
function timer() {
  msec -= 100;
  if (msec == 0) {
    sec--;
    msec = 1000;
    if (sec == 0) {
      min--;
    }
  }
  document.getElementById(
    "timerdisplay"
  ).innerHTML = `<span id="min">${min}:</span><span id="sec">${sec}:</span><span
  id="msec">${msec}</span>`;
}
let id = 0;
sec = 59;
msec = 1000;
startButton.addEventListener("click", function () {
  if (clik == false) {
    id = setInterval(() => {
      timer();
    }, 100);
  }
  clik = true;
});

stopButton.addEventListener("click", function () {
  clearInterval(id);
  document.getElementById(
    "timerdisplay"
  ).innerHTML = `<span id="min">${min}:</span><span id="sec">${sec}:</span><span
  id="msec">${msec}</span>`;
  clik = false;
});
resetButton.addEventListener("click", function () {
  min = 20;
  sec = 0;
  msec = 0;
  clearInterval(id);
  document.getElementById(
    "timerdisplay"
  ).innerHTML = `<span id="min">${min}:</span><span id="sec">${sec}:</span><span
  id="msec">${msec}</span>`;
  clik = false;
  min = 20;
  sec = 59;
  msec = 1000;
});
