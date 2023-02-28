const express = require('express')
const taskRouter = require("./routes/task");
const notFound = require("./middlewares/not-found")
const errorHandler = require("./middlewares/error-handler")
const app = express()

const morgan = require('morgan')

app.use(express.static("./public"));
app.use(express.json());
app.use(morgan('dev'))

app.use("/api/v1/tasks", taskRouter);



module.exports = app