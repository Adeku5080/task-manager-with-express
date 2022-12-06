const express = require("express");
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

const taskRouter = express.Router();

taskRouter.route("/").get(getAllTasks).post(createTask);
taskRouter.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = taskRouter;
