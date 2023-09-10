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
    AddRegAluno.create({
        nome: req.data.nome,
        curso: req.data.curso,
        serie: req.data.serie,
        email: req.data.email,
        municipio: req.data.municipio,
        livro: req.data.livro,
        data_emprestimo: req.data.data_emprestimo,
        data_entrega: req.data.data_entrega,
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