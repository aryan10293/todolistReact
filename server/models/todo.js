const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true},
  date: {type: Date, required: true, default: Date.now},
});


module.exports = mongoose.model("Todo", todoSchema);