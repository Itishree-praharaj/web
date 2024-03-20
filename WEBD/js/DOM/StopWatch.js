let milliSec = document.getElementById("msec");
let seconds = document.getElementById("sec");
let minutes = document.getElementById("min");
let min = 0;
let sec = 0;
let ms = 0;
let timeTag = `<span id="min">${min}:</span><span id="sec"> ${
  " " + sec + " "
}:</span><span id="msec">${" " + ms + " "}</span>`;
document.getElementById("time").innerHTML = timeTag;
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let intervalId;
startBtn.addEventListener("click", function () {
  intervalId = setInterval(display, 10);
});
function display() {
  ms += 1;
  if (ms == 100) {
    sec += 1;
    ms = 0;
    if (sec == 60) {
      min += 1;
      sec = 0;
    }
  }
  document.getElementById("time").innerHTML =
    timeTag = `<span id="min">${min}:</span><span id="sec"> ${
      " " + sec + " "
    }:</span><span id="msec">${" " + ms + " "}</span>`;
}

stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
});

resetBtn.addEventListener("click", function () {
  min = 0;
  sec = 0;
  ms = 0;
  clearInterval(intervalId);
  document.getElementById("time").innerHTML =
    timeTag = `<span id="min">${min}:</span><span id="sec"> ${
      " " + sec + " "
    }:</span><span id="msec">${" " + ms + " "}</span>`;
});
