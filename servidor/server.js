const http = require("http");
const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Desafio Plathanus");
});

http.createServer(app).listen(3001, () => console.log("Servidor rodando local na porta 3001"));