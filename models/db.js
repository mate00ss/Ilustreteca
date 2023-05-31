const Sequelize = require('sequelize');
var database = 'ilustreteca';
var user = 'ilustreteca';
var password = 'ilustre73c4';
var host = 'localhost';
var dialect = 'mariadb';

const sql = new Sequelize(database, user, password, {
    host: host,
    dialect: dialect,
});

module.exports = sql
