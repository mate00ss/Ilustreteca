// Loading Environment variables 
require("dotenv").config();

// Importing Modules
const express = require("express");

// Creating an express instance
const app = express();

// Configuring middleware and stuff
app.set("view engine", "ejs");
app.use(express.static("public/"));

// Defining API routes
app.get("/", async function(req, res) {
    res.render("index");
})

app.get("/fichas", function(req, res) {
    let data_fichas = {
        ficha_01: {
            nome: "Mateus",
            serie: "3",
            curso: "info"
        }
    }
    res.render("fichas", { data_fichas });
})

app.get("/livros", function(req, res) {
    res.render("livros");
})

app.get("/estatisticas", function(req, res) {
    res.render("estatisticas");
})

// Iniciando o servidor
app.listen(process.env.PORT, function() {
    console.log(`Server open on: http://localhost:${process.env.PORT}`)
})
