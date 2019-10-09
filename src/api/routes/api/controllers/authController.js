const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validateLoginInput = require('../../../validation/login');
const passport = require('passport');

/* Load Validation */
const validateRegisterInput = require('../../../validation/register');

/* Load User Model*/
const User = require('../../../models/User');

const createUser = async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) return res.status(400).json(errors);

  return User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Sorry, email is already in use. Try another one.';
      return res.status(400).json(errors);
    } else {
      const { email, password } = req.body;
      const newUser = new User({ email, password });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
};

const loginUser = async (req, res, next) => {
  const email = req.body.username;
  const { password } = req.body;

  const { errors, isValid } = validateLoginInput({ email, password });
  // Check validation
  if (!isValid) return res.status(400).json(errors);

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json(info);
    }
    req.logIn(user, err => {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
};

module.exports = {
  createUser,
  loginUser
};
