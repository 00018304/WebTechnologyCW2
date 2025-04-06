const express = require('express');
const router = express.Router();
const todoController = require('../controllers/index');

// Home route
router.get('/', todoController.showTodos);

// Add a new to do
router.post('/add', todoController.addTodo);

// Edit an existing to do
router.post('/edit/:id', todoController.editTodo);

// Delete a to do
router.get('/delete/:id', todoController.deleteTodo);




module.exports = router;
