const cors = require("cors");
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get("/tasks", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./tasks.json", "utf8"));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
