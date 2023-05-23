const Sequelize = require('sequelize');
var database = 'ilustreteca';
var user = 'ilustreteca';
var password = 'ilustre73c4';
var host = '20.20.1.43';
var dialect = 'mariadb';

const sql = new Sequelize(database, user, password, {
    host: host,
    dialect: dialect,
});

module.exports = sql
