
const Task = require("../models/tasks");
const asyncWrapper = require("../middlewares/async")

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    return res.status(200).json({
      tasks,
    });
  } catch (err) {
    res.send(500).json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    const name = req.body.name;
    const completed = req.body.completed;
    const tasks = await Task.create({ name, completed });

    return res.status(201).json({
      tasks: tasks,
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ msg: "this task does not exist" });
    }
    res.status(200).json({
      task,
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
     
  

    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });


    if (!task) {
      return res.status(404).json({ msg: "this task does not exist" });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOneAndDelete({ _id: id });

    if (!task) {
      return res.status(404).json({ msg: "this task does not exist" });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
