const fs = require('fs-extra');
const path = require('path');
const todosFile = path.join(__dirname, '../data/todos.json');

// Get all to do
exports.getAllTodos = async () => {
  try {
    const todos = await fs.readJson(todosFile);
    return todos;
  } catch (err) {
    return [];
  }
};

// Add a new to do
exports.addTodo = async (task) => {
  const todos = await this.getAllTodos();
  const newTodo = {
    id: Date.now(),
    task,
    completed: false,
  };
  todos.push(newTodo);
  await fs.writeJson(todosFile, todos);
};

// Edit an existing to do
exports.editTodo = async (id, task) => {
  const todos = await this.getAllTodos();
  const todo = todos.find(todo => todo.id === parseInt(id));
  if (todo) {
    todo.task = task;
    await fs.writeJson(todosFile, todos);
  }
};

// Delete a to do
exports.deleteTodo = async (id) => {
  let todos = await this.getAllTodos();
  todos = todos.filter(todo => todo.id !== parseInt(id));
  await fs.writeJson(todosFile, todos);
};


