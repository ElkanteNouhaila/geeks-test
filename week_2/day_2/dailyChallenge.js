const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
//1 
const usernames = [];
gameInfo.forEach(user => {
  usernames.push(user.username + "!");
});
console.log(usernames);
//2 
const tallPlayersUsernames = gameInfo
  .filter(user => user.score > 5)
  .map(user => user.username);
console.log(tallPlayersUsernames);
// 3 
const totalScore = gameInfo.reduce((total, user) => total + user.score, 0);
console.log(totalScore);
