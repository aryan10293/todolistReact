const Todo = require('../models/todo')

module.exports = {

    renderTodo: async (req,res) => {
      const getTodos = await Todo.find()
      res.status(200).json(getTodos)
    },
    postTodo: async (req,res) => {
      const todo = new Todo({
        task: req.body.task
      })

      todo.save();

      res.json(todo);

    },
    checkTodo: async = async (req,res) => {
      	const todo = await Todo.findById(req.params.id);

        todo.completed = !todo.completed;

        todo.save();

        res.json(todo);
    },
    deleteTodo: async = async (req,res) => {
        const todo = await Todo.findOneAndRemove(req.params.id);

        const getTodos = await Todo.find()

        res.status(200).json(getTodos)
    },
}