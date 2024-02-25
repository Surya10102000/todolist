const Task = require("../models/task")

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500),json({ msg : error})
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updataTask = (req, res) => {
  res.send("update task");
};
const deleteTasks = (req, res) => {
  res.send("delete task");
};
module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updataTask,
  deleteTasks,
};