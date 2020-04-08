const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')

const Model = Sequelize.Model

class Todo extends Model {}
Todo.init({
  // attributes
  task: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isCompleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  ownerID: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'todo'
  // options
})

module.exports = Todo
