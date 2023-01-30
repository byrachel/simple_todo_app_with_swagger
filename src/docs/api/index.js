const getTodos = require('./todos/get-todos');
const getTodo = require('./todos/get-todo');
const createTodo = require('./todos/create-todo');
const updateTodo = require('./todos/update-todo');
const deleteTodo = require('./todos/delete-todo');
const user = require('./user/getUser');

module.exports = {
    paths:{
        '/todos':{
            tags: 'Todo CRUD operations',
            ...getTodos,
            ...createTodo
        },
        '/todos/{id}':{
            tags: 'Todo CRUD operations',
            ...getTodo,
            ...updateTodo,
            ...deleteTodo
        },
        '/user': {
            tags: 'User',
            ...user
        }
    }
}