function employees(name, sal) {
  this.name = name;
  this.sal = sal;
}

let e1 = new employees("Rakesh", 100000);
console.log(e1);
let e2 = new employees("Rizz", 100000);
console.log(e2);
