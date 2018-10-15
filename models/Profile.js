const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  enrollement_status: {
    type: String
  },
  telephone: {
    type: String
  },
  location: {
    type: String
  },
  parents_info: {
    type: String,
    required: false
  },
 
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
