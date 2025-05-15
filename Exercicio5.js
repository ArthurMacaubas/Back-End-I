import readline from "readline-sync";

//tividade 1
let semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
let dia = readline.question("Informe a opção: ")

switch (dia) {
    case dia = "0":
        console.log(semana[0])
        break
    case dia = "1":
        console.log(semana[1])
        break
    case dia = "2":
        console.log(semana[2])
        break
    case dia = "3":
        console.log(semana[3])
        break
    case dia = "4":
        console.log(semana[4])
        break
    case dia = "5":
        console.log(semana[5])
        break
    case dia = '6':
        console.log(semana[6])
        break
    default:
        console.log("Dia errado, Selecione um dia Válido! ")
        break
}

// Atividade 2

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "junho", "Julho", "Setembro", "Outubro", "Novembro", "Dezembro"]
let mes = (11)