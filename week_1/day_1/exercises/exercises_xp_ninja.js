// ===== Exercise 1
// Person 1
let person1 = {
  fullName: "Alice Smith",
  mass: 68, 
  height: 1.65, 
  calcBMI: function() {
    return this.mass / (this.height ** 2);
  }
};

// Person 2
let person2 = {
  fullName: "Bob Johnson",
  mass: 85,
  height: 1.75,
  calcBMI: function() {
    return this.mass / (this.height ** 2);
  }
};

function compareBMI(p1, p2) {
  let bmi1 = p1.calcBMI();
  let bmi2 = p2.calcBMI();

  if (bmi1 > bmi2) {
    console.log(`${p1.fullName} has the higher BMI: ${bmi1.toFixed(2)}`);
  } else if (bmi2 > bmi1) {
    console.log(`${p2.fullName} has the higher BMI: ${bmi2.toFixed(2)}`);
  } else {
    console.log(`Both have the same BMI: ${bmi1.toFixed(2)}`);
  }
}

// Call the function
compareBMI(person1, person2);

// ===== Exercise 2
function findAvg(gradesList) {
  let sum = 0;

  // 1
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }

  // 2
  let avg = sum / gradesList.length;
  console.log("Average:", avg.toFixed(2));

  // 3
  if (avg >= 65) {
    console.log("Congratulations! You passed the course.");
  } else {
    console.log("You failed. You must repeat the course.");
  }
}

// Example usage
let grades = [80, 70, 60, 90, 50];
findAvg(grades);

