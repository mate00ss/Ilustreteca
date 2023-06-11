const Sequelize = require('sequelize');

const sql = new Sequelize({
    dialect: 'sqlite',
    storage: './db/ilustreteca.sqlite'
});

module.exports = sql;