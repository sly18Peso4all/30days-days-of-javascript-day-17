//Exercises: Level 1
/*
1) Store you first name, last name, age, country, city in your browser localStorage.
*/

// Solution 1
localStorage.setItem("name", "jerry");
localStorage.setItem("age", "29");
localStorage.setItem("job", "Developer");

//Exercises: Level 2
/*
1) Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
*/

// Solution 1
const student = {
  firstName: "Joseph",
  lastName: "Frank",
  country: "Germany",
  city: "Berlin",
  age: 30,
  skills: ["HTML", "CSS", "JS", "React"],
};

let studentJSON = JSON.stringify(student, undefined, 4);
let local = localStorage.setItem("student", studentJSON);

//Exercises: Level 3
/*
1) Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/

// Solution 1
const personAccount = {
  firstName: "Danny",
  lastName: "Donny",
  income: [233, 3340, 38770, 29818, 3736],
  expenses: [233, 30, 3000, 1038, 506],
};

let accountJSON = JSON.stringify(personAccount);
localStorage.setItem("personAccount", accountJSON);
