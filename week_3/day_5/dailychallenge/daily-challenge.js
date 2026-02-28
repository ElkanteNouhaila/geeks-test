import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🎸", name: "Guitar" }
];

let score = 0;
let leaderboard = [];

function getRandomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function getOptions(correctName) {
  const options = [correctName];
  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(random)) options.push(random);
  }
  return options.sort(() => Math.random() - 0.5);
}

app.get("/api/question", (req, res) => {
  const emojiObj = getRandomEmoji();
  const options = getOptions(emojiObj.name);

  res.json({
    emoji: emojiObj.emoji,
    options,
    answer: emojiObj.name
  });
});

app.post("/api/guess", (req, res) => {
  const { guess, answer, username } = req.body;

  let correct = false;

  if (guess === answer) {
    score++;
    correct = true;
  }

  leaderboard.push({ username: username || "Player", score });

  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 5);

  res.json({
    correct,
    score,
    leaderboard
  });
});

app.listen(PORT, () => {
  console.log(`Game running at http://localhost:${PORT}`);
});