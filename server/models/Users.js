// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // Add other fields as needed
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
