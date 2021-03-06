const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

//Create User Schema
const UserSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String },
  password: { type: String },
  date: { type: Date, default: Date.now },
  facebook: {
    id: String,
    token: String,
    displayName: String
  },
  steam: {
    id: String,
    displayName: String,
    avatar: String
  }
});

module.exports = User = mongoose.model('users', UserSchema);

module.exports.createUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.getUserByEmail = function(email, callback) {
  var query = { email: email };
  User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
};
