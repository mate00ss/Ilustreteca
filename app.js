// Imports
const express = require('express');
const app = express();
const ejs = require('ejs');
// const AddLivro = require('./models/AddLivro');
// const {AddRegAluno, AddRegComunidade, AddRegProfessor} = require('./models/AddReg');
const { DateTime } = require('luxon')



// CONFIG
const PORT = 6999;
app.set('view engine', 'ejs');
app.use(express.static('public/'));

// ROTAS
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/fichas', (req, res) => {
    res.render('tela_fichas');
});
app.get('/livros', (req, res) => {
    res.send('Tela - Livros');
    // res.render('tela_fichas');
});
app.get('/estatisticas', (req, res) => {
    res.send('Tela - Estatísticas');
    // res.render('tela_fichas');
})

// app.post('/addreg', (req, res) => {
//     if (req.data.tipo == "aluno") {
//         AddRegAluno.create({
//             nome: req.data.nome,
//             curso: req.data.curso,
//             serie: req.data.serie,
//             email: req.data.email,
//             municipio: req.data.municipio,
//             livro: req.data.livro,
//             data_emprestimo: DateTime.local().toISODate(),
//             data_entrega: DateTime.local().plus({days: 7}).toISODate(),
//         })
//     }
// })

// SERVER 
app.listen(PORT, () => {
    console.log(`O servidor agora está rodando em: http://localhost:${PORT}` );
})
