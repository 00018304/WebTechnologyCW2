const todoService = require('../services/todoService');

// Show all to do
exports.showTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();
    res.render('index', { todos });
  } catch (err) {
    res.status(500).send('Error retrieving to-dos');
  }
};

// Add a new to do
exports.addTodo = async (req, res) => {
  try {
    const { task } = req.body;
    if (!task) {
      return res.status(400).send('Task is required');
    }
    await todoService.addTodo(task);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error adding to-do');
  }
};

// Edit an existing to do
exports.editTodo = async (req, res) => {
  try {
    const { task } = req.body;
    const { id } = req.params;
    if (!task) {
      return res.status(400).send('Task is required');
    }
    await todoService.editTodo(id, task);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error editing to-do');
  }
};

// Delete a to do
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await todoService.deleteTodo(id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error deleting to-do');
  }
};



  

