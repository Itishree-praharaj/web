let employees = [
  {
    id: 1,
    first_name: "Lucias",
    last_name: "Starbuck",
    email: "lstarbuck0@mlb.com",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Katrine",
    last_name: "Mattimoe",
    email: "kmattimoe1@prlog.org",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Maurise",
    last_name: "Vogeller",
    email: "mvogeller2@guardian.co.uk",
    gender: "Female",
  },
  {
    id: 4,
    first_name: "Paloma",
    last_name: "Steketee",
    email: "psteketee3@cam.ac.uk",
    gender: "Polygender",
  },
  {
    id: 5,
    first_name: "Karol",
    last_name: "Fitzsymons",
    email: "kfitzsymons4@ow.ly",
    gender: "Female",
  },
  {
    id: 6,
    first_name: "Roda",
    last_name: "Daniaud",
    email: "rdaniaud5@friendfeed.com",
    gender: "Female",
  },
  {
    id: 7,
    first_name: "Wyn",
    last_name: "Andrioletti",
    email: "wandrioletti6@bloomberg.com",
    gender: "Male",
  },
  {
    id: 8,
    first_name: "Huntlee",
    last_name: "Gergler",
    email: "hgergler7@newyorker.com",
    gender: "Male",
  },
  {
    id: 9,
    first_name: "Wynn",
    last_name: "Hardstaff",
    email: "whardstaff8@va.gov",
    gender: "Polygender",
  },
  {
    id: 10,
    first_name: "Paton",
    last_name: "Wivell",
    email: "pwivell9@dmoz.org",
    gender: "Male",
  },
];
let tbodyTag = document.getElementById("table-body");
let displayemp = function displayEmployees(emps) {
  let display = ``;

  if (emps.length > 0) {
    for (let emp of emps) {
      display += `<tr>
      <td>${emp.id}</td>
      <td>${emp.first_name}</td>
      <td>${emp.last_name}</td>
      <td>${emp.email}</td>
      <td>${emp.gender}</td>
  </tr>`;
    }
  }
  tbodyTag.innerHTML = display;
};
document
  .getElementById("allemps")
  .addEventListener("click", displayemp(employees));

function searchEmp(val, emps) {
  val = val.toUpperCase().trim();
  let filteredEmps = [];
  for (let emp of emps) {
    let oName = emp.first_name.toUpperCase().trim();
    if (oName.includes(val)) {
      filteredEmps.push(emp);
    }
  }
  return filteredEmps;
}

let allMaleEmps = employees.filter((emp) => {
  return emp.gender == "Male";
});
let allFemaleEmps = employees.filter((emp) => {
  return emp.gender == "Female";
});
document.getElementById("allfemale").addEventListener("click", function () {
  displayemp(allFemaleEmps);
});

document.getElementById("allmale").addEventListener("click", function () {
  displayemp(allMaleEmps);
});
let search = document.getElementById("inpt");
search.addEventListener("keyup", function () {
  let enteredName = search.value;
  let searchedEmps = searchEmp(enteredName, employees);
  displayemp(searchedEmps);
});
document.getElementById("allemps").addEventListener("click", function () {
  displayemp(employees);
});
