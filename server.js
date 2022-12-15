const express = require("express");
require("./db/connect");
const taskRouter = require("./routes/task");

const app = express();

const port = 8000;

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", taskRouter);

app.listen(port, () => {
  console.log(`you are listening on port ${port}`);
});

module.exports={
  app
}
