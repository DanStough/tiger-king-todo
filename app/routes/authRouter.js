const express = require('express')
const passport = require('../config/passport')

const router = express.Router()

router.get('/github',
  passport.authenticate('github', { scope: ['user:email'] }), function (req, res) {
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  })

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/auth/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/todos')
  })

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/todos')
})

module.exports = router
