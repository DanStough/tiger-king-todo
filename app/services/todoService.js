const debugService = require('debug')('tiger:service')
const Todo = require('../models/todo')

async function createTodo (task, userId) {
  await Todo.create({
    task: task,
    ownerID: userId
  })
}

async function listIncompletedTodos (userId) {
  return Todo.findAll({
    where: {
      isCompleted: false,
      ownerID: userId
    },
    raw: true
  })
}

async function listCompletedTodos (userId) {
  return Todo.findAll({
    where: {
      isCompleted: true,
      ownerID: userId
    },
    raw: true
  })
}

async function updateTodoById (id, todo, userId) {
  const record = await Todo.findByPk(id)
  if (record && record.ownerID === userId) {
    record.task = todo.task || record.task
    if (todo.isCompleted !== undefined) {
      record.isCompleted = todo.isCompleted
    }
    return record.save()
  } else {
    debugService('Could not find TODO id:{id} requested record to update')
  }
}

async function deleteTodoById (id, userId) {
  const record = await Todo.findByPk(id)
  if (record && record.ownerID === userId) {
    return record.destroy()
  } else {
    debugService('Could not find TODO id:{id} requested record to delete')
  }
}

module.exports = {
  createTodo: createTodo,
  listIncompletedTodos: listIncompletedTodos,
  listCompletedTodos: listCompletedTodos,
  updateTodoById: updateTodoById,
  deleteTodoById: deleteTodoById
}
