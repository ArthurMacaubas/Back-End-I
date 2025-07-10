const express = require("express");
const app = express();
const ip = 8080;
const calculadoraIMC = require("./servico/calculadoraIMC")


app.get("/", (req, res) => {
    let peso =  req.query.peso;
    let altura = req.query.altura;

    if(calculadoraIMC.validaParametro(req.query.peso) && calculadoraIMC.validaParametro(req.query.altura)){
        
        let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);
        let status = calculadoraIMC.retornarStatusIMC(imc);
        let json = {imc: imc, status: status};

        res.json(json);
    } else {
        res.status(400).json({"Erro":"peso ou altura inválidos!"});
    }
});

app.listen(ip , () => {
    console.log("Servidor Iniciado em: \n==========================================\n         http://localhost:"+ip+"/"+"\n==========================================\n");
});