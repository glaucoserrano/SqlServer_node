const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const user = require('../model/User');
const addresses = require('../model/Addresses');
const tech = require('../model/Tech');

const connection = new Sequelize(dbConfig);

user.init(connection);
addresses.init(connection);
tech.init(connection);

addresses.associate(connection.models);
user.associate(connection.models);
tech.associate(connection.models);

module.exports = connection;

