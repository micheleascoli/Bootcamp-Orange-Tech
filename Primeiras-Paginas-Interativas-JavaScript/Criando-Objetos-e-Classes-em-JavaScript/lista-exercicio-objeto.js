/**
    1 - Crie uma classe pararepresentar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível porl Km rodado.
    Crie um método que dado a quantidade que quilômetros e o preço do combustível nos dê o 
    valor gasto em reais para realizar este percurso.
 */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDoPercurso(quantidadeKm, precoCombustivel){
        return (quantidadeKm / this.gastoMedioPorKm) * precoCombustivel;
    }
}

const c1 = new Carro('Nissan', 'Cinza', 10);
console.log(c1.calcularGastoDoPercurso(70, 5));

const c2 = new Carro('Mercedes', 'Preta', 8);
console.log(c2.calcularGastoDoPercurso(100, 7.3));

