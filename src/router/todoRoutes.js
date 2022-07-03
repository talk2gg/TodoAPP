const router = require('express').Router()
const controller = require('../controller/todoController')

router
.get('/', controller.getAllTodos)
.get('/:id',controller.getTodo)
.post('/',controller.createTodo)
.put('/:id',controller.updateTodo)
.delete('/:id',controller.Todo)

module.exports = router