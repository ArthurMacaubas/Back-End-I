// 01
let apart = {
quartos: 2,
tipo: "Apartamento",
endereco: "Avenida Principal, 456 - Centro.",
andar: 7
}
console.log("Apartamento com",apart.quartos,"quartos, localizado no",apart.andar,"andar da",apart.endereco)


console.log("-=-=-=-=-==-=-=-=-==-=-=-=-=-=")
// 02
let produtoEmbalado = {
nome: "Laptop HP",
categoria: "Eletrônicos",
peso: 1.5,
preco: 3500.00,
}
console.log("O produto",produtoEmbalado.nome,",da categoria",produtoEmbalado.categoria,", pesando",produtoEmbalado.peso,"kg, está à venda por R$",produtoEmbalado.preco)

console.log("-=-=-=-=-==-=-=-=-==-=-=-=-=-=")
// 03
class Imovel {
    constructor(quartos, tipo, endereco) {
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco;
    }

    exibirInformacoes() {
        return `${this.tipo} com ${this.quartos} quartos, localizado em ${this.endereco}`;
    }
}

// Instanciando objetos
const casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
const apartamento = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");

// Exibindo informações
console.log(casa.exibirInformacoes());
console.log(apartamento.exibirInformacoes());

console.log("-=-=-=-=-==-=-=-=-==-=-=-=-=-=")
// 04
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}

// Instanciando os objetos
const carro = new Veiculo("Toyota", "Corolla", 2022);
const motocicleta = new Veiculo("Honda", "CBR 600RR", 2021);

// Exibindo os detalhes
console.log(carro.exibirDetalhes());
console.log(motocicleta.exibirDetalhes());