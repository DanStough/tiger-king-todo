
// Adapted from https://github.com/zapstar/node-sequelize-passport/blob/master/util/index.js
// middleware to see if we're authenticated or not
module.exports = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/auth/login')
}
