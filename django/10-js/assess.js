// for (let i = 0; i < 5; i++) {
//   console.log("Hello");
// }

// let num = 1;
// while (num < 25) {
//   if (num % 2 !== 0) {
//     console.log(num);
//   }
//   num += 1;
// }
let firstName = prompt("First Name");
let lastName = prompt("Last Name");
let age = prompt("Age");
let height = prompt("Height");
let perName = prompt("Pet name");

let nameCond;
let ageCond;
let heightCond;
let perCond;

if (firstName[0] === lastName[0]) {
  nameCond = true;
} else {
  nameCond = false;
}

if (age > 20 && age < 30) {
  ageCond = true;
} else {
  ageCond = false;
}

if (height >= 170) {
  heightCond = true;
} else {
  heightCond = false;
}

if (perName[perName.length - 1] === "y") {
  perCond = true;
} else {
  perCond = false;
}

if (nameCond && ageCond && heightCond && perCond) console.log("Welcome");
