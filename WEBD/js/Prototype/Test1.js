let stu = ["Rak", "Nik"];
console.log(stu.__proto__); //Array
console.log(stu.__proto__.__proto__); //Object created by JSE
console.log(stu.__proto__.__proto__.__proto__); //Null

function m1() {
  console.log("m1");
}
m1();
console.log(m1.__proto__); //function
console.log(m1.__proto__.__proto__); //object
console.log(m1.__proto__.__proto__.__proto__); //Null

let student = {
  id: "101",
  sName: "Rakesh",
};
console.log(student.__proto__); //Object
console.log(student.__proto__.__proto__); //Null

let fun = new m1();
console.log(fun.__proto__); //construtor & object
console.log(fun.__proto__.__proto__); //Object
console.log(fun.__proto__.__proto__.__proto__); //Null

console.log(Function.prototype); //native code
console.log(Object.prototype); //Object
console.log(Array.prototype); //Array
