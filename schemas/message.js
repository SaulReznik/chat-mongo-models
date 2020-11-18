const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  user: String,
  message: String
});
