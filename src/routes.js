const express = require('express');
const UserController = require('./controller/userController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);


module.exports  = routes;