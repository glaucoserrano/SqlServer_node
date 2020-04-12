const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const user = require('../model/User');
const addresses = require('../model/Addresses');
const techs = require('../model/Techs');

const connection = new Sequelize(dbConfig);

user.init(connection);
addresses.init(connection);
techs.init(connection);

addresses.associate(connection.models);
user.associate(connection.models);
techs.associate(connection.models);

module.exports = connection;

