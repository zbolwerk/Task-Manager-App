# Personal Task Assistant

This is a self-driven learning project to help you set-up a **React** project, with a **NodeJS/Express** backend, and **JSON** as your data storage format. The goal is to build a lightweight task assistant that helps prioritize and schedule your day intelligently.

## Project Description

The Task Assistant will:

- Let you enter tasks, projects, or interests
- Allow each item to have:

  - A title and description
  - Priority (e.g., High, Medium, Low)
  - Due date (if applicable)
  - Effort estimate (in hours)
  - Interest level (e.g., 1–5 stars)

- Each day, generate a suggested "plan" for a 6-hour block:

  - What _must_ get done today
  - What would be _useful_ to work on next

The assistant should also:

- Display the backlog of all tasks
- Allow tasks to be marked as complete
- Allow manual reordering or changes

---

## Tech Stack

- **Frontend:** React Typescript (with hooks, functional components, basic routing)
- **Backend:** NodeJS with Express (simple REST API)
- **Data storage:** Local JSON file for storing tasks

---

## Getting Started

## Project Setup

You can organize your project like this:

```text
task-assistant/
├── web/           # React frontend
└── server/        # Node/Express backend
```

### 1. Set up the React Frontend

Use [Vite](https://vitejs.dev/) to scaffold a modern React app:

```bash
npm create vite@latest client -- --template react-ts
cd web
npm install
npm run dev
```

Helpful links:

- [React Docs](https://react.dev/)
- [Vite + React Quickstart](https://vitejs.dev/guide/)

Suggested Pages/Views:

- Dashboard (daily plan)
- Task List / Backlog
- Task Editor (form to add/edit tasks)

---

### 2. Set up the Express Backend

```bash
mkdir server
cd server
npm init -y
npm install express
```

Create a basic server in `index.js`:

```js
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3001;

app.use(express.json());

// Example: GET all tasks
app.get("/tasks", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./tasks.json", "utf8"));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

Helpful links:

- [Express Docs](https://expressjs.com/en/starter/installing.html)
- [Reading/Writing JSON in Node](https://nodejs.dev/en/learn/write-files-in-nodejs/)

---

### 3. Connect React to Express

From React, use `fetch` to call your Express API:

```js
useEffect(() => {
  fetch("http://localhost:3001/tasks")
    .then((res) => res.json())
    .then((data) => setTasks(data));
}, []);
```

You may need to configure CORS in Express:

```bash
npm install cors
```

And then in `index.js`:

```js
const cors = require("cors");
app.use(cors());
```

Helpful links:

- [Using Fetch in React](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [CORS in Express](https://expressjs.com/en/resources/middleware/cors.html)

---

## Suggested Features to Try

Try building incrementally:

1. Add a new task
2. View all tasks
3. Edit and delete a task
4. Save/load tasks to a JSON file
5. Calculate and render a "daily plan"
6. Add search or filters
7. Use localStorage on the client as an optional cache

---

## Stretch Goals

- Add drag-and-drop task ordering with [React DnD](https://react-dnd.github.io/react-dnd/)
- Persist data to disk when tasks are added/edited
- Add dark mode toggle
- Add simple user authentication
- Add tags/categories for tasks
