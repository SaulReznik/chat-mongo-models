const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  message: {
    user: String,
    message: String
  }
});
