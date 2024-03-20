let num1 = Number(prompt("Enter the number"));
let num2 = Number(prompt("Enter the number"));
let funct = prompt("Enter the operation");
function calc(a, b, func) {
  if (func === "add") {
    return a + b;
  } else if (func === "sub") {
    return a - b;
  } else if (func === "sub") {
    return a - b;
  } else if (func === "mul") {
    return a * b;
  } else if (func === "div") {
    return a / b;
  } else if (func === "mod") {
    return a % b;
  }
}

calc(num1,num2,funct);