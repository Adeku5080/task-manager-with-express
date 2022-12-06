const express = require("express");
const taskRouter = require('./routes/task')

const app = express();

const port = 8000;

app.use(express.json())

app.get("/hello", (req, res) => {
  res.send("task manager app");
});

app.use("/api/v1/tasks",taskRouter)

app.listen(port, () => {
  console.log(`you are listening on port ${port}`);
});
