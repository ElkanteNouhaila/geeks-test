// ===== Exercise 1
// 1
let numbers = [123, 8409, 100053, 333333333, 7];
// 2
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// ===== Exercise 2
// const readline = require("readline-sync");

// 1
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

// 2
let name = readline.question("Enter your name: ");

// 3
if (name in guestList) {
  console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
} else {
  console.log("Hi! I'm a guest.");
}

// ===== Exercise 3
let age = [20, 5, 12, 43, 98, 55];

// 1
let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum += age[i];
}
console.log("Sum of ages:", sum);

// 2
let maxAge = age[0]; 
for (let i = 1; i < age.length; i++) {
  if (age[i] > maxAge) {
    maxAge = age[i];
  }
}
console.log("Highest age:", maxAge);

