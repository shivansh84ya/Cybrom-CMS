const mongoose = require('mongoose');

// Define product schema
const UserSchema = new mongoose.Schema({
  userid: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  registerAs: {
    type: String,
    // required: true
  },    
  mobile: {
    type: String,
    // required: true
  }
});

module.exports = mongoose.model('userRegistration', UserSchema);
