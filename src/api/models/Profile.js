const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create User Schema
const ProfileSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  squad: [String]
});

module.exports = Profile = mongoose.model('profiles', ProfileSchema);
