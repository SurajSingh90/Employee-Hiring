const express = require('express');
const routes = express.Router();
const {CreateAdmin} = require('../controller/admin')

routes.post('/admin/create', CreateAdmin)



module.exports = {
    adminroutes:routes
}