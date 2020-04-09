require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": "tiger-todo",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": "tiger-todo",
    "host": "db",
    "dialect": "postgres"
  }
}
