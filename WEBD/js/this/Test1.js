// "use strict";

let a = function num() {
  console.log(this);
};
function main() {
  console.log(a);
  console.log(this);
}
main();
