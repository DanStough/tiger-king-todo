const debugRouter = require('debug')('tiger:http')
const express = require('express')
const router = express.Router()

const todoService = require('../services/todoService')
const authGuard = require('../util/authGuard')
// middleware to hanlde errors:
// Credit: https://arjunphp.com/restful-api-using-async-await-node-express-sequelize/
const awaitErorrHandlerFactory = middleware => {
  return async (req, res, next) => {
    try {
      await middleware(req, res, next)
    } catch (err) {
      next(err)
    }
  }
}

router.get('/todos', authGuard, awaitErorrHandlerFactory(async (req, res) => {
  debugRouter(req.method + ': ' + req.url)
  const incompleted = await todoService.listIncompletedTodos(req.user.id)
  const completed = await todoService.listCompletedTodos(req.user.id)

  res.render('todo', {
    completedTodos: completed,
    incompleteTodos: incompleted,
    url: process.env.URL,
    name: req.user.displayName
  })
}))

// Create a New TODO
router.post('/todos', authGuard, awaitErorrHandlerFactory(async (req, res) => {
  debugRouter(req.method + ': ' + req.url)
  if (req.body.task) {
    const data = await todoService.createTodo(req.body.task, req.user.id)

    debugRouter('Created TODO: ' + JSON.stringify(data))
  }
  res.redirect(303, '/todos')
}))

// Delete a TODO
router.delete('/todos/:id', authGuard, awaitErorrHandlerFactory(async (req, res) => {
  debugRouter(req.method + ': ' + req.url)
  if (req.params.id) {
    const id = req.params.id
    const data = await todoService.deleteTodoById(id, req.user.id)

    debugRouter('Deleted TODO: ' + JSON.stringify(data))
    res.send(`Updated TODO Item ID: ${id}`)
  } else {
    res.send('Did nothing}')
  }
}))

// Update the Todo
router.put('/todos/:id', authGuard, awaitErorrHandlerFactory(async (req, res) => {
  debugRouter(req.method + ': ' + req.url)
  if (req.params.id && req.body) {
    const id = req.params.id
    const todo = req.body
    const data = await todoService.updateTodoById(id, todo, req.user.id)

    debugRouter('Updated TODO: ' + JSON.stringify(data))
    res.send(`Deleted TODO Item ID: ${id}`)
  } else {
    res.send('Did nothing}')
  }
}))

module.exports = router
