const express = require('express');
const router = express();
const passport = require('passport');
const authController = require('./controllers/authController');

/**
 * @route POST /api/auth/register
 * @description Registers a new user for mypubgsquad.com
 * @access Public
 */
router.post('/register', async (req, res) => {
  return authController.createUser(req, res);
});

/**
 * @route POST /api/auth/login
 * @description Authenticates a user for mypubgsquad.com
 * @access Public
 */
router.post('/login', async (req, res, next) => {
  return authController.loginUser(req, res, next);
});

router.get('/facebook', passport.authenticate('facebook'));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect to the dashboard.
    res.redirect('/dashboard/');
  }
);

router.get('/steam', passport.authenticate('steam'));

router.get('/steam/return', passport.authenticate('steam', { failureRedirect: '/login' }), function(
  req,
  res
) {
  // Successful authentication, redirect to the dashboard.
  res.redirect('/dashboard/');
});

// Endpoint to get current user
router.get('/user', (req, res) => {
  res.send(req.user);
});

// Endpoint to logout
router.get('/logout', (req, res) => {
  req.logout();
  res.send(null);
});

module.exports = router;
