require('dotenv').config()

const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const path = require('path')

const sequelize = require('./config/sequelize')
const passport = require('./config/passport')

const authRouter = require('./routes/authRouter.js')
const todoRouter = require('./routes/todoRouter.js')

const app = express()
const port = 3000

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.set('views', './app/views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRouter)
app.use('/', todoRouter)
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function (req, res) {
  res.redirect('/todos')
})

sequelize.sync()

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
