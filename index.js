const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {studentroutes,companyroutes,adminroutes,jobroutes} = require('./routes')
app.use(express.json());
app.use(studentroutes)
app.use(companyroutes);
app.use(adminroutes);
app.use(jobroutes)

mongoose.connect("mongodb://localhost:/employeehire",()=>{
    console.log("Connecting to MongoDB")
})
app.listen(4500,()=>{
    console.log("port listening 4500")
})