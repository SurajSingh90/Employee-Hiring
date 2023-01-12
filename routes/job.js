const express = require('express');
const routes = express.Router();
const {Createjob} = require('../controller/job')
const {verify} = require('../middleware/auth')


routes.post('/job/create/',[verify],Createjob)
module.exports = {
    jobroutes:routes
}