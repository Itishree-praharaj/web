function Atm() {
  let amnt = 7900;
  // prompt("Enter the amount");
  if (amnt % 100 != 0) console.log("Enter a valid amount");
  else {
    if (amnt >= 2000) {
      console.log(`2000 * ${Math.trunc(amnt / 2000)}`);
      amnt %= 2000;
    }
    if (amnt >= 500) {
      console.log(`500 * ${Math.trunc(amnt / 500)}`);
      amnt %= 500;
    }
    if (amnt >= 200) {
      console.log(`200 * ${Math.trunc(amnt / 200)}`);
      amnt %= 200;
    }
    if (amnt >= 100) {
      console.log(`100 * ${Math.trunc(amnt / 100)}`);
    }
  }
}
Atm();
