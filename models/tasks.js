const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "must provide a name"],
    maxlength: [20, "name cannot be more than twenty characters"],
  },
  completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
