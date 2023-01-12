const express = require('express');
const routes = express.Router();
const {CreateCompany,getalljobs,deletebyadmin,logincompany} = require('../controller/company')
// const {verify} = require('../middleware/auth')

routes.post('/job/company',CreateCompany) 
routes.post('/job/company/login',logincompany)
routes.get('/job/company/:id',getalljobs) 
routes.delete('/job/company/:id',deletebyadmin)




module.exports = {
    companyroutes:routes
}