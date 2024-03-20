function Fib(range) {
  let first = 0;
  let second = 1;
  let third = 0;
  for (let i = 1; i <= range; i++) {
    console.log(first);
    third = first + second;
    first = second;
    second = third;
  }
}

Fib(10);
