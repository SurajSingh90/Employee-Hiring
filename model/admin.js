const mongoose = require('mongoose');



const AdminSchema = mongoose.Schema({
  names: {
    type: String,
    required: true
  },
  
  
  email: {
    type: String,
    required: true
  },

  role: {
    type: String,
    default: "ADMIN"
  },
  createdAt: {
    type: Date,
    default: Date
  }
});

module.exports = mongoose.model('Admins', AdminSchema);