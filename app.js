// Loading Environment variables 
require("dotenv").config();

// Importing Modules
const express = require("express");
const { AddRegAluno, AddRegProfessor, AddRegComunidade } = require("./models/AddReg")
const { Aluno } = require("./ObjectPreset");

// Creating an express instance
const app = express();

// Configuring middleware and stuff
app.set("view engine", "ejs");
app.use(express.static("public/"));

// Defining API routes
app.get("/", async function(req, res) {
    res.render("index");
})

app.get("/fichas", async function(req, res) {
    data_fichas = await AddRegAluno.findAll();
    

    res.render("fichas", { data_fichas });
})

app.post("/fichas", async function(req, res) {
    fichaAluno = Object.create(Aluno);

    fichaAluno.nome = req.data.nome; 
    fichaAluno.curso = req.data.curso;
    fichaAluno.serie = req.data.serie;
    fichaAluno.email = req.data.email;
    fichaAluno.municipio = req.data.municipio;
    fichaAluno.livro = req.data.livro;
    fichaAluno.data_emprestimo = req.data.data_emprestimo;
    fichaAluno.data_entrega = req.data.data_entrega;

    AddRegAluno.create({
        nome: fichaAluno.nome,
        curso: fichaAluno.curso,
        serie: fichaAluno.serie,
        email: fichaAluno.email,
        municipio: fichaAluno.municipio,
        livro: fichaAluno.livro,
        data_emprestimo: fichaAluno.data_emprestimo,
        data_entrega: fichaAluno.data_entrega,
    });
})

app.get("/livros", async function(req, res) {
    res.render("livros");
})

app.get("/estatisticas", async function(req, res) {
    res.render("estatisticas");
})

// Iniciando o servidor
app.listen(process.env.PORT, function() {
    console.log(`Server open on: http://localhost:${process.env.PORT}`);
})


function criarFichaAluno(data) {
    AddRegAluno.create(data);
}

function criarFichaProfessor(data) {
    AddRegProfessor.create(data);
}

function criarFichaComunidade(data) {
    AddRegComunidade.create(data);
}