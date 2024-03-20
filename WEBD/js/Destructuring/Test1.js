let student = {
  stuId: "JSP101",
  firstName: "Rakesh",
  lastName: "Pradhan",
  address: {
    street: "AswathNagar",
    landMark: "temple",
    pin: 560036,
    city: "Bangalore",
    state: "Karnataka",
  },
};
console.log(student.address.city);
console.log(student.address.street);

let { city, street } = student.address;
console.log(city);
console.log(street);
