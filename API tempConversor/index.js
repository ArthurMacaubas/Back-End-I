const express = import("express");
const app = express();
const ip = 8080;
const conversor = require("./servico/conversor")

app.get("/", (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;
})