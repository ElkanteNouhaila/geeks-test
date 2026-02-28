import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

const questions = [
  { question: "What is the capital of France?", options: ["Paris","Berlin","Madrid","Rome"], answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth","Mars","Jupiter","Venus"], answer: "Mars" },
  { question: "What is 5 + 7?", options: ["10","11","12","13"], answer: "12" }
];

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Quiz Game</title>
      <style>
        body { font-family: Arial; text-align: center; padding: 20px; }
        button { margin: 5px; padding: 10px 20px; }
      </style>
    </head>
    <body>
      <h1>Quiz Game 🎮</h1>
      <div id="quiz">
        <h2 id="question"></h2>
        <div id="options"></div>
        <h3 id="score"></h3>
        <h3 id="final"></h3>
      </div>
      <script>
        let currentIndex = 0;
        let score = 0;

        async function loadQuestion() {
          const res = await fetch('/api/question/' + currentIndex);
          if (!res.ok) {
            document.getElementById('quiz').style.display = 'none';
            document.getElementById('final').textContent = 'Quiz Finished! Your final score: ' + score;
            return;
          }
          const data = await res.json();
          document.getElementById('question').textContent = data.question;
          const optionsDiv = document.getElementById('options');
          optionsDiv.innerHTML = '';
          data.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.onclick = () => checkAnswer(opt, data.answer);
            optionsDiv.appendChild(btn);
          });
        }

        function checkAnswer(selected, correct) {
          if (selected === correct) score++;
          alert(selected === correct ? 'Correct!' : 'Wrong! Correct answer: ' + correct);
          document.getElementById('score').textContent = 'Score: ' + score;
          currentIndex++;
          loadQuestion();
        }

        loadQuestion();
      </script>
    </body>
    </html>
  `);
});

app.get("/api/question/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < questions.length) {
    res.json(questions[index]);
  } else {
    res.status(404).json({ error: "No more questions" });
  }
});

app.listen(PORT, () => console.log(`Quiz running at http://localhost:${PORT}`));