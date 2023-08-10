const Sequelize = require('sequelize');
const sql = require('./db');

const AddRegAluno = sql.define('empAlunos', {
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    curso: {
        type: Sequelize.STRING(11),
        allowNull: false,
    },
    serie: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: true,
    },
    municipio: {
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    livro: {
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    data_emprestimo: {
        type: Sequelize.DATEONLY(),
        allowNull: false,
    },
    data_entrega: {
        type: Sequelize.DATEONLY(),
        allowNull: false,
    },
},{
    timestamps: false,
})

const AddRegProfessor = sql.define('empProfessores', {
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: true,
    },
    livro: {
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    data_emprestimo: {
        type: Sequelize.DATEONLY(),
        allowNull: false,
   },
    data_entrega: {
        type: Sequelize.DATEONLY(),
        allowNull: false,
    },
},{
    timestamps: false,
})

const AddRegComunidade = sql.define('empComunidade', {
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: true,
    },
    telefone: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    municipio: {
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    livro: {
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    data_emprestimo: {
        type: Sequelize.DATEONLY(),
        allowNull: false,
    },
    data_entrega: {
        type: Sequelize.DATEONLY(),
        allowNull: false,
    },
},{
    timestamps: false,
});

module.exports = { AddRegAluno, AddRegProfessor, AddRegComunidade };
