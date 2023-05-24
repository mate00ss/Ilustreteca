// Imports
const express = require('express');
const app = express();
const ejs = require('ejs');
const AddLivro = require('./models/AddLivro');
const { where } = require('sequelize');

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

AddLivro.findAll({
    where:{
    N_DE_ORDEM: 690,
}},
(err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})

// SERVER 
app.listen(PORT, () => {
    console.log(`O servidor agora está rodando em: http://localhost:${PORT}` );
})