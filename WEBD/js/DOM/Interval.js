let count = 1;
let inter = setInterval(function () {
  count++;
  console.log(count);
}, 1000);
setTimeout(function () {
  clearInterval(inter);
}, 5000);
