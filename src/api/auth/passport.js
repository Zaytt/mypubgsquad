const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const strategies = require('./strategies');

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// Define Passport Strategies
passport.use(strategies.local);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.getUserById(id, (err, user) => {
    done(err, user);
  });
});
