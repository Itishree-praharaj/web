let firstText = "Javascript Is Very Easy";
let secondText = "Javascript Is Zingalala";
let thirdText = "Javascript Is life";
let fourthText = "Javascript Is brain";
let fifthText = "Javascript Is Very Good";
let displayText = document.getElementById("text");
let firstBtn = document.getElementById("btn1");
let secondBtn = document.getElementById("btn2");
let thirdBtn = document.getElementById("btn3");
let fourthBtn = document.getElementById("btn4");
let fifthBtn = document.getElementById("btn5");

let intervalId;
firstBtn.addEventListener("click", function () {
  displayText.innerText = firstText;
  textareaTag.value = ``;
  min = 0;
  sec = 0;
  msec = 0;
  clearInterval(intervalId);
  timerTag.innerHTML = `<i id="mintag">${min}:</i><i id="sectag">${sec}:</i><i id="msectag">${msec}</i>`;
  console.log(displayText.innerText);
});
secondBtn.addEventListener("click", function () {
  displayText.innerText = secondText;
});
thirdBtn.addEventListener("click", function () {
  displayText.innerText = thirdText;
});
fourthBtn.addEventListener("click", function () {
  displayText.innerText = fourthText;
});
fifthBtn.addEventListener("click", function () {
  displayText.innerText = fifthText;
});

let min = 0;
let sec = 0;
let msec = 0;

let timerTag = document.getElementById("timer-display");
let timerDisplay = `<i id="mintag">${min}:</i><i id="sectag">${sec}:</i><i id="msectag">${msec}</i>`;

let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let startBtn = document.getElementById("start");

let timer = function () {
  intervalId = setInterval(function () {
    msec++;
    if (msec == 100) {
      sec++;
      msec = 0;
    }
    if (sec == 59) {
      min++;
      sec = 0;
    }
    timerTag.innerHTML = `<i id="mintag">${min}:</i><i id="sectag">${sec}:</i><i id="msectag">${msec}</i>`;
  }, 10);
};
startBtn.addEventListener("click", function () {
  intervalId = setInterval(function () {
    msec++;
    if (msec == 100) {
      sec++;
      msec = 0;
    }
    if (sec == 59) {
      min++;
      sec = 0;
    }
    timerTag.innerHTML = `<i id="mintag">${min}:</i><i id="sectag">${sec}:</i><i id="msectag">${msec}</i>`;
  }, 10);
});

stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
});

resetBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  min = 0;
  sec = 0;
  msec = 0;
  timerTag.innerHTML = `<i id="mintag">${min}:</i><i id="sectag">${sec}:</i><i id="msectag">${msec}</i>`;
});
let count = 0;
let textareaTag = document.getElementById("usn");
textareaTag.addEventListener("click", function () {
  timer();
});
textareaTag.addEventListener("keyup", function () {
  //   count++;
  let textRes = displayText.innerText;
  let values = textareaTag.value;
  console.log(textRes);
  console.log(values);
  if (values == textRes) {
    textareaTag.style.boxShadow = "0px 0px 10px green";
    clearInterval(intervalId);
  } else {
    textareaTag.style.boxShadow = "0px 0px 10px orange";
  }
  //   console.log(count);
});
