function prime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.trunc(number / 2); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log(prime(6));
