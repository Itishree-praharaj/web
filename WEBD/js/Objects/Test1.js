let student = {
  stuId: "JSP101",
  firstName: "Rakesh",
  lastName: "Pradhan",
  birthYear: "2001",
  age:function(){
    return 2023 - this.birthYear;
  },
  gender: "male",
};
// let name=student.firstName+" "+student.lastName;
let name = "firstName";
console.log(student);
console.log("Firstname : " + student.firstName);
console.log("Lastname : " + student.lastName);
// console.log(student.address);
// console.log(student.name);
console.log(student[name]);
console.log(student.age(student.birthYear));