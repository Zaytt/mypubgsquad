const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const SteamStrategy = require('passport-steam').Strategy;
const User = require('../models/User');
const keys = require('../../api/config/keys');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL;

const local = new LocalStrategy(function(username, password, done) {
  User.getUserByEmail(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return done(null, false, { email: 'No user with that email was found' });
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { password: 'Invalid password' });
      }
    });
  });
});

const facebook = new FacebookStrategy(
  {
    clientID: keys.facebookClient,
    clientSecret: keys.facebookSecret,
    callbackURL: `${ROOT_URL}/api/auth/facebook/callback`
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ 'facebook.id': profile.id }, function(err, user) {
      if (err) return done(err);
      if (user) return done(null, user);
      else {
        // if there is no user found with that facebook id, create it
        var newUser = new User();

        // set all of the facebook information in our user model

        newUser.password = '';
        newUser.facebook.id = profile.id;
        newUser.facebook.token = accessToken;
        newUser.facebook.displayName = profile.displayName;

        // save our user to the database
        newUser.save(function(err) {
          if (err) throw err;
          return done(null, newUser);
        });
      }
    });
  }
);

const steam = new SteamStrategy(
  {
    returnURL: 'http://localhost:3000/api/auth/steam/return',
    realm: 'http://localhost:3000/',
    apiKey: keys.steamApiKey
  },
  function(identifier, profile, done) {
    User.findOne({ 'steam.id': profile.id }, function(err, user) {
      if (err) return done(err);
      if (user) return done(null, user);
      else {
        // if there is no user found with that steam id, create it
        var newUser = new User();

        // set all of the steam information in our user model

        newUser.password = '';
        newUser.steam.id = profile.id;
        newUser.steam.displayName = profile.displayName;
        newUser.steam.avatar = profile.photos[2].value;

        // save our user to the database
        newUser.save(function(err) {
          if (err) throw err;
          return done(null, newUser);
        });
      }
    });
  }
);

module.exports = {
  local,
  facebook,
  steam
};
