const express = require('express');
const UserController = require('./controller/userController');
const AddressesController = require('./controller/addressesController');
const techController = require('./controller/techController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses',AddressesController.index);
routes.post('/users/:user_id/addresses',AddressesController.store);

routes.get('/users/:user_id/tech',techController.index);
routes.post('/users/:user_id/tech',techController.store);


module.exports  = routes;