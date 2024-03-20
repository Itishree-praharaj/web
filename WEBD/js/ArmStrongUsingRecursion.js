function armstrong(number, length) {
  if (number <= 0) return 0;
  return (
    power(Math.trunc(number % 10), length) +
    armstrong((number = Math.trunc(number / 10)), length)
  );
}

function count(number) {
  while (number > 0) {
    count++;
    number = Math.trunc(number / 10);
  }
  return count;
}

function power(number, pow) {
  if (pow === 0) return 1;
  return number * power(number, pow - 1);
}
// console.log(power(5, 2));
let len = count(153);
console.log(armstrong(153, 3));
// console.log(power(5, 2));
