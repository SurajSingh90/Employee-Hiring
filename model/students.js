const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique:true,
    },
    lastname:{
        type:String,
        required:true,
        unique:true,

    },
    phone:{
        type:Number,
        required:true,
        default:""
    },
    gmail:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        default: "STUDENT"
      },
      createdAt: {
        type: Date,
        default: Date
      }

})
module.exports = mongoose.model('Student',studentSchema)