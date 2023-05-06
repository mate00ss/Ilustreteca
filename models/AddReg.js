const Sequelize = require('sequelize')
const sql = require('./db')

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
        defaultValue: Sequelize.NOW,
    },
    data_entrega: {
        type: Sequelize.DATEONLY(),
        allowNull: false,
        defaultValue: sql.literal('DATE_ADD(data_emprestimo, INTERVAL 7 DAY)'),
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
        defaultValue: Sequelize.NOW,
    },
    data_entrega: {
        type: Sequelize.DATEONLY(),
        allowNull: false,
        //PODE MUDAR DE ACORDO COM DATAS DE ENTREGA DEFINIDAS PELA BIBLIOTECA PARA PROFESSORES
        defaultValue: sql.literal('DATE_ADD(data_emprestimo, INTERVAL 7 DAY)'),
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
        defaultValue: Sequelize.NOW,
    },
    data_entrega: {
        type: Sequelize.DATEONLY(),
        allowNull: false,
        //PODE MUDAR DE ACORDO COM DATAS DE ENTREGA DEFINIDAS PELA BIBLIOTECA PARA A COMUNIDADE
        defaultValue: sql.literal('DATE_ADD(data_emprestimo, INTERVAL 7 DAY)'),
    },
},{
    timestamps: false,
});

module.exports = { AddRegAluno, AddRegProfessor, AddRegComunidade };

// CÓDIGO PARA ALTERAÇÕES POSTERIORES

// AddRegAluno.sync({alter: true});
// AddRegProfessor.sync({alter: true});
// AddRegComunidade.sync({alter: true});

// AddRegAluno.create({
//     nome: "12314",
//     curso: "INFORMÁTICA",
//     serie: 3,
//     email: "teste@gmail.com",
//     municipio: "Santana do Cariri",
//     livro: "As aventuras de teste",
// })
