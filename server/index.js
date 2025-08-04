const cors = require("cors");
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

const TASKS_FILE = "./tasks.json";

// GET all tasks
app.get("/tasks", (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(TASKS_FILE, "utf-8"));
  res.json(tasks);
});


// POST a new task
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const tasks = JSON.parse(fs.readFileSync(TASKS_FILE, "utf-8"));
  const newTask = { id: Date.now(), title };
  tasks.push(newTask);
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));

  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
