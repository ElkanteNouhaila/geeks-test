// html field named exercicexp
// ==== Exercise 3
const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }
// 1
const jsonMarioGame = JSON.stringify(marioGame);
console.log(jsonMarioGame);
// everything becomes a string
// 2
const prettyJsonMarioGame = JSON.stringify(marioGame, null, 2);
console.log(prettyJsonMarioGame);

// 3
debugger;
console.log(prettyJsonMarioGame);
