const express = require('express');
const UserController = require('./controller/userController');
const AddressesController = require('./controller/addressesController');
const TechController = require('./controller/techController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses',AddressesController.index);
routes.post('/users/:user_id/addresses',AddressesController.store);

routes.get('/users/:user_id/techs',TechController.index);
routes.post('/users/:user_id/techs',TechController.store);
routes.delete('/users/:user_id/techs',TechController.delete);


module.exports  = routes;