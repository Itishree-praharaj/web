function swap() {
  let num1 = 10;
  let num2 = 20;
  console.log(`num1 = ${num1}`);
  console.log(`num2 = ${num2}`);
  num1 = num2 + 10;
  num2 = num1;
  num1 = num2 - 10;
  num2 = num1 - 10;
  console.log(`num1= ${num1}`);
  console.log(`num2= ${num2}`);
}
swap();
