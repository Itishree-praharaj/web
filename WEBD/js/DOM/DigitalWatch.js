let timeTag = document.getElementById("min");
function displayTime() {
    let d = new Date();
    let hours = d.toLocaleTimeString();
    // console.log(hours);
  timeTag.innerText = hours;
  //   console.log("hi");
}

setInterval(displayTime, 1000);
