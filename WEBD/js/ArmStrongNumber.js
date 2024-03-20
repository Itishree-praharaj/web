function armstrongNumber(number) {
  let length = count(number);
  let res = 0;
  let num = number;
  while (number > 0) {
    let rem = number % 10;
    res = res + power(rem, length);
    number = Math.trunc(number / 10);
    // console.log(res);
  }
  return num === res;
}

function count(number) {
  let count = 0;
  while (number > 0) {
    count++;
    number = Math.trunc(number / 10);
  }
  return count;
}

function power(num, pow) {
  let res = 1;
  for (let i = 1; i <= pow; i++) {
    res = res * num;
  }
  return res;
}
console.log(armstrongNumber(153));
// console.log(power(5, 3));
// console.log(count(145));
