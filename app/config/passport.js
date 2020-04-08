const debugConfig = require('debug')('tiger:passport')
const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy

passport.serializeUser(function (user, done) {
  debugConfig('Profile: ' + JSON.stringify(user))
  done(null, user)
})

passport.deserializeUser(function (obj, done) {
  debugConfig('Profile: ' + obj)
  done(null, obj)
})

// Configure the strategy
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/github/callback'
},
function (accessToken, refreshToken, profile, done) {
  debugConfig('Config: ' + JSON.stringify(profile))
  process.nextTick(function () {
    // To keep the example simple, the user's GitHub profile is returned to
    // represent the logged-in user.  In a typical application, you would want
    // to associate the GitHub account with a user record in your database,
    // and return that user instead.

    return done(null, profile)
  })
}
))

module.exports = passport
