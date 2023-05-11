const Sequelize = require('sequelize')
const sql = require('./db')

const AddLivro = sql.define('livros', {
    N_DE_ORDEM: {
        type: Sequelize.INTEGER(4),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    CDD_CDU: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    INDICES_CATALOGO_SISTEMATICO: {
        type: Sequelize.STRING(250),
        allowNull: false,
    },
    N_DE_TOMBO: {
        type: Sequelize.STRING(15),
        allowNull: false,
    },
    DATA_AQUISICAO: {
        type: Sequelize.STRING(8),
        allowNull: true,
    },
    AUTOR: {
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    TITULO: {
        type: Sequelize.STRING(250),
        allowNull: false,
    },
    VOLUME: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    EX: {
        type: Sequelize.STRING(3),
        allowNull: false,
    },
    LOCAL: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    EDITORA: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    ANO_PUBLICACAO: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
    FORMA_AQUISICAO: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    OBS: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    CUTTER: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
    EDICAO: {
        type: Sequelize.STRING(4),
        allowNull: false,
    },
},{
    timestamps: false,
    freezeTableName: true,
});

module.exports = AddLivro;