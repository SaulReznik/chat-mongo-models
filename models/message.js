const mongoose = require('mongoose');
const { MessageSchema } = require('../schemas');

module.exports = mongoose.model('Message', MessageSchema);
