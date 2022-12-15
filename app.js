const express = require('express')
const taskRouter = require("./routes/task");

const app = express()

const morgan = require('morgan')

app.use(express.static("./public"));
app.use(express.json());
app.use(morgan('dev'))

app.use("/api/v1/tasks", taskRouter);

module.exports = app