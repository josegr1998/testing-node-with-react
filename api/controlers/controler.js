const Todo = require("../models/todo");

const getAll = async (req, res) => {
  const todos = await Todo.find({});

  res.status(200).json({ todos });
};

const postTodo = async (req, res) => {
  const todo = await Todo.create(req.body);

  res.status(201).json({ todo });
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findOneAndDelete({ _id: id });

  if (!todo) {
    return res.status(404).json({ msg: `no task with de id : ${id}` });
  }

  res.status(200).json({ success: "true" });
};

const completeTodo = async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });

  res.status(200).json({ todo });
};

module.exports = { getAll, postTodo, deleteTodo, completeTodo };
