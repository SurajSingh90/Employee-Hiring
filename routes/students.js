const express = require('express');
const routes = express.Router();
const {Createstudents,loginpage} = require('../controller/students')
// const {verify} = require('../middleware/auth')

routes.post('/job/signup',Createstudents)
routes.post('/job/login/:firstname',loginpage)



module.exports = {
    studentroutes:routes
}