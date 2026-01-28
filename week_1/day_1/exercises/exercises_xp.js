// ===== Exercise 1
// 1
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0, 1);
console.log(people);
// 2 
// first method
people.splice(3, 1, "Jason");
console.log(people);
// seconde methode
people[3] = "Jason";
console.log(people);
// 3
people.push("Nouhaila");
console.log(people);
// 4
index = people.indexOf("Mary");
console.log(index);
// 5
const newpeople = people.push("Nouhaila");
console.log(people.slice(2, 4));
// 6
foo = people.indexOf("Foo"); // -1 because "Foo" is not in the array
console.log(foo);
// 7
const last = people[people.length - 1];
console.log(last);

// part II - Loops
// ===== Exercise 2
// 1
const colors = ["blue", "red", "yellow", "green", "black"];
// 2
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}
// 3
suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}
// ===== Exercise 3
// 1
const readline = require("readline-sync");
let number = readline.question("Enter a number: ");
number = Number(number);
console.log(typeof number);
// 2
while (number < 10) {
  number = Number(
    readline.question("Number too small, enter a new number: ")
  );
}
console.log("Good! Your number is:", number);
// ===== Exercise 4
// 1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// 2
console.log(building.numberOfFloors);
// 3
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
// 4
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);
// 5
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];
if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent has been increased to:", building.numberOfRoomsAndRent.dan[1]);
}

// ===== Exercise 5
//1
const family = {
    father: "Mohmed",
    mother: "Noura",
    son: "Saad",
    daughter: "Nouhaila"
};
//2
for (let member in family) {
    console.log(member);
}   
//3
for (let member in family) {
    console.log(family[member]);
}
// ===== Exercise 6
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// 1
let sentence = "";
for (let i in details) {
  sentence += i + " " + details[i] + " ";
}
console.log(sentence.trim());
// ===== Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// 1
let societyName = "";
for (let i = 0; i < names.length; i++) {
  societyName += names[i][0];
}
societyName = societyName.split("").sort().join("");
// 2
console.log(societyName);