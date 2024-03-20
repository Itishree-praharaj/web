function main() {
  let a = 10;
  let b = 20;
  console.log(a++ > 10 && ++b > 20);
  console.log(a);
  console.log(b);
  console.log(0 && 1);
  console.log((a++ > 12) | (b >= 20));
  console.log(2 & 1);
}
main();
