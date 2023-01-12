const mongoose = require('mongoose');



const CompanySchema = mongoose.Schema({

  companyName: {
    type: String,
    default: ''
  },
  companyEmail: {
    type: String,
    default: ''
  },
  companyPhone: {
    type: String,
    default: ''
  },
  password: {
    type: String,
  },
 
  role: {
    type: String,
    default: "COMPANY"
  },
  createdAt: {
    type: Date,
    default: Date
  }
});

module.exports = mongoose.model('Companies', CompanySchema);