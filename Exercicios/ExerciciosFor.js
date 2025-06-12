import input from "readline-sync";

// Atividade 1
let n1 = 0;
let n2 = 1;
console.log(n1);
console.log(n2);

for (let i = 2; i < 20; i++) {
    let n3 = n1 + n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;
}

// Atividade 2
for (let i = 0; i < 10; i++) {
    let nome = input.question(`Digite o nome da pessoa ${i + 1}:`);
    let salario = input.questionFloat(`Digite o salário bruto de ${nome}:`);
    let imposto;

    if (salario <= 2100) {
        imposto = 0;
    } else if (salario <= 2800) {
        imposto = salario * 0.075;
    } else if (salario <= 3750) {
        imposto = salario * 0.15;
    } else if (salario <= 4660) {
        imposto = salario * 0.225;
    } else {
        imposto = salario * 0.275;
    }

    console.log(`Nome: ${nome}, Imposto: R$ ${imposto.toFixed(2)}`);
}

// For in e For of

// Atividade 1
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

for (let chave in pessoa) {
    console.log(`Chave: ${chave}, Valor: ${pessoa[chave]}`);
}

// Atividade 2
const numeros = [10, 20, 30, 40, 50];

for (let valor of numeros) {
    console.log(valor);
}

// Atividade 3
const texto = "Olá Mundo";

for (let caractere of texto) {
    console.log(caractere);
}