import input from "readline-sync"

// Atividade 1
let num = input.questionInt("Insira um número (0 - 10) para a apresentação da tabuada: ")

let i = 0
while (true) {
    console.log(`${num} x ${i} = ${num * i}`)
    i = i + 1
    if (i === 11) {
        break
    }
}

// Atividade 2
let n =0

let numTurma = input.questionInt("Insira o número de alunos na turma: ")

while (true){
    n = n + 1
    let notaAlunos = input.question(`Insira a nota do ${n}° aluno: `)
    let mediaTurma = notaAlunos / numTurma
    if (n === numTurma) {
        console.log(mediaTurma)
        break
    }
}
