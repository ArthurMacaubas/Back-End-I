import input from "readline-sync"

// Atividade 1
let num = input.questionInt("Insira um número (0 - 10) para a apresentação da tabuada: ")

let i = 0
while (true) {
    console.log(`${num} x ${i} = ${num * i}`)
    i = i + 1
    if (i === 10) {
        break
    }
}

// Atividade 2
let numTurma = input.questionInt("Número de alunos: ");
let notas = [[], [], [], []];
let mediasBim = [];
let mediasAnuais = [];
let somaTotalNotas = 0;
let aluno = 1;

while (aluno <= numTurma) {
    let notasAluno = [];
    let bimestre = 0;
    while (bimestre < 4) {
        let nota = input.questionFloat(`Nota do aluno ${aluno}, bimestre ${bimestre + 1}: `);
        notas[bimestre].push(nota);
        notasAluno.push(nota);
        somaTotalNotas += nota;
        bimestre++;
    }
    mediasAnuais.push(notasAluno.reduce((soma, n) => soma + n, 0) / 4);
    aluno++;
}

let bimestre = 0;
while (bimestre < 4) {
    mediasBim.push(notas[bimestre].reduce((soma, n) => soma + n, 0) / numTurma);
    bimestre++;
}

let mediaTotal = somaTotalNotas / (numTurma * 4);

console.log("\nMédias por bimestre:");
bimestre = 0;
while (bimestre < 4) {
    console.log(`Bimestre ${bimestre + 1}: ${mediasBim[bimestre].toFixed(2)}`);
    bimestre++;
}
console.log("\nMédias anuais:");
aluno = 0;
while (aluno < numTurma) {
    console.log(`Aluno ${aluno + 1}: ${mediasAnuais[aluno].toFixed(2)}`);
    aluno++;
}
console.log(`\nMédia total da turma: ${mediaTotal.toFixed(2)}`);