let a = 10; //global
function main() {
  let b = 20; //function scope
  console.log(b);
  console.log(a);
}
// console.log(b);error
main();
{
  let c = 30;
  console.log(c); //block scope
}
console.log(c); //error
