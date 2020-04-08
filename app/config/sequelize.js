const Sequelize = require('sequelize')
const process = require('process')

const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOSTNAME}:5432/tiger-todo`)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = sequelize
