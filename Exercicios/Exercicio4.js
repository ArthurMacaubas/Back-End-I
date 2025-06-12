import abc from "readline-sync";

//tividade 1
let semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
let dia = abc.question("insira um número representando um dia da semana (1 a 7): ")


switch (dia) {
    case dia = "1":
        console.log(semana[0])
        break
    case dia = "2":
        console.log(semana[1])
        break
    case dia = "3":
        console.log(semana[2])
        break
    case dia = "4":
        console.log(semana[3])
        break
    case dia = "5":
        console.log(semana[4])
        break
    case dia = "6":
        console.log(semana[5])
        break
    case dia = "7":
        console.log(semana[6])
        break
    default:
        console.log("Dia errado, Selecione um dia Válido! ")
        break 
}
// Atividade 2

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let mes = abc.question("insira um número de mês (1 a 12): ")

switch (mes) {
    case mes = "1":
        console.log(meses[0])
            break
    case mes = "2":
        console.log(meses[1])
            break
    case mes = "3":
        console.log(meses[2])
            break
    case mes = "4":
        console.log(meses[3])
            break
    case mes = "5":
        console.log(meses[4])
            break
    case mes = "6":
        console.log(meses[5])
            break
    case mes = "7":
        console.log(meses[6])
            break
    case mes = "8":
        console.log(meses[7])
            break
    case mes = "9":
        console.log(meses[8])
            break
    case mes = "10":
        console.log(meses[9])
            break
    case mes = "11":
        console.log(meses[10])
            break
    case mes = "12":
        console.log(meses[11])
            break
    default:
        console.log("Mês errado! Informe o numero (1 - 12) de um mês Válido!")
        }


// Atividade 3 
let a = abc.questionFloat("Informe o primeira numero: ")
let operacao = abc.question("Informe a operação que deseja: ")
let b = abc.questionFloat("Informe o segundo numero: ")

let divisao = [a / b]
let adicao = [a + b]
let multiplicao = [a * b]
let subtracao = [a - b]

switch(a,b,operacao){
    case a,b,operacao = "*":
        console.log("O resultado será igual a:",multiplicao)
        break

    case a,b,operacao = "-":
        console.log("O resultado será igual a:",subtracao)
        break

    case a,b,operacao = "+":
        console.log("O resultado será igual a:",adicao)
        break

    case a,b,operacao = "/":
        console.log("O resultado será igual a:",divisao)
        break

}

// Atividade 4

let salario = abc.questionFloat("Informe Seu Salário: ")
let resposta = abc.question("Informe Sua Categoria (A, B, C, D): ")
let A = 5; let B = 10; let C = 15; let D = 20;

switch (resposta){
    case resposta = "A":
        console.log("Seu novo salario é: ", (salario * 1.05))
        break
    case resposta = "B":
        console.log("Seu novo salario é: ", (salario * 1.1))
        break
    case resposta = "C":
        console.log("Seu novo salario é: ", (salario * 1.15))
        break
    case resposta = "D":
        console.log("Seu novo salario é: ", (salario * 1.2))
        break
    default:
        console.log("Informe uma categoria Válida!")
        break
}