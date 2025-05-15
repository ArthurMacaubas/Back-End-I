// Atividade 1

let colegas = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
console.log(colegas[2]);
colegas.push("Fernanda");
colegas.shift();
console.log(colegas);

// Atividade 2

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.reverse();
console.log(numeros);
numeros.sort((a, b) => a - b);
console.log(numeros);
let numerosString = numeros.join("-");
console.log(numerosString);

//Atividade 3

let notas = [6.5, 7.0, 5.5, 8.0];
let soma = notas.reduce((acc, nota) => acc + nota, 0);
let media = soma / notas.length;
console.log(media);
if (media >= 6) {
    console.log("A média é maior ou igual a 6.");
} else {
    console.log("A média é menor que 6.");
}

// Atividade 4

let frutas = ["banana", "maçã", "pera", "uva", "melão"];
let comA = frutas.filter(fruta => fruta.includes("a"));
console.log(comA);
if (!frutas.includes("abacate")) {
    frutas.push("abacate");
}
console.log(frutas);

// Atividade 5

let carrinho = [];
function adicionarItem(item) {
    carrinho.push(item);
}
function removerItem(item) {
    let index = carrinho.indexOf(item);
    if (index !== -1) {
    carrinho.splice(index, 1);
    }
}
function listarItens() {
    console.log("Itens no carrinho:", carrinho);
}
adicionarItem("Produto 1");
adicionarItem("Produto 2");
removerItem("Produto 1");
listarItens();

// Atividade 6

let numeros6 = [10, 5, 8, 2, 7];
let soma6 = numeros.reduce((acc, val) => acc + val, 0);
let produto = numeros.reduce((acc, val) => acc * val, 1);
console.log(soma);
console.log(produto);