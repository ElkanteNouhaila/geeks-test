import express from "express";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 5000;

app.use(express.json());

// Exercise 1
const JSONPLACEHOLDER = "https://jsonplaceholder.typicode.com/posts";

app.get("/api/posts", async (req, res) => {
  try {
    const response = await axios.get(JSONPLACEHOLDER);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

app.get("/api/posts/:id", async (req, res) => {
  try {
    const response = await axios.get(`${JSONPLACEHOLDER}/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(404).json({ error: "Post not found" });
  }
});

app.post("/api/posts", async (req, res) => {
  try {
    const response = await axios.post(JSONPLACEHOLDER, req.body);
    res.status(201).json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

app.put("/api/posts/:id", async (req, res) => {
  try {
    const response = await axios.put(`${JSONPLACEHOLDER}/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(404).json({ error: "Failed to update post" });
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  try {
    await axios.delete(`${JSONPLACEHOLDER}/${req.params.id}`);
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(404).json({ error: "Failed to delete post" });
  }
});

// Exercise 2
const users = []; 
const SECRET = "supersecretkey";

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Missing username or password" });

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: "User registered" });
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
  res.json({ message: "Login successful", token });
});

app.get("/api/profile", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ username: decoded.username });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

// Exercise 3:
let todos = [];
let todoId = 1;

app.post("/api/todos", (req, res) => {
  const { title, completed = false } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const newTodo = { id: todoId++, title, completed };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

app.put("/api/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  const { title, completed } = req.body;
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.json({ message: "Todo deleted" });
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));