const cors = require("cors");
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

const TASKS_FILE = "./tasks.json";

// Load tasks
function loadTasks() {
  if (!fs.existsSync(TASKS_FILE)) return [];
  return JSON.parse(fs.readFileSync(TASKS_FILE, "utf8"));
}

// Save tasks
function saveTasks(tasks) {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// Get tasks
app.get("/tasks", (req, res) => {
  const tasks = loadTasks();
  res.json(tasks);
});

// POST: Add new task
app.post("/tasks", (req, res) => {
  const tasks = loadTasks();
  const newId = tasks.length > 0
  ? Math.max(...tasks.map(t => t.id)) + 1
  : 1;
  const newTask = {id: newId, ...req.body};
  tasks.push(newTask);
  saveTasks(tasks);
  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
