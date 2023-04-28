// Imports
const express = require('express');
const app = express();
const ejs = require('ejs');

// CONFIG
const PORT = 6999;
app.set('view engine', 'ejs');
app.use(express.static('public/'));

// ROTAS
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/fichas', (req, res) => {
    res.render('tela_fichas')
})

// SERVER 
app.listen(PORT, () => {
    console.log(`O servidor agora está rodando em: http://localhost:${PORT}` );
})