const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
router.get('/getTodosApi', todoController.renderTodo)
router.post('/postTodosApi', todoController.postTodo)
module.exports = router; 