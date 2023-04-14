const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
router.get('/getTodosApi', todoController.renderTodo)
router.post('/postTodosApi', todoController.postTodo)
router.get('/editTodosApi/:id', todoController.checkTodo)
router.delete('/deleteTodosApi/:id', todoController.deleteTodo)
module.exports = router; 