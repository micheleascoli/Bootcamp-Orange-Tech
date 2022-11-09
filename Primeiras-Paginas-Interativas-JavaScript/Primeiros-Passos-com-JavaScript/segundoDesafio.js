/**
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
- Preço do etanol;
- Preço da gasolina;
- O tipo de combustível que está no carro;
- Gasto médio de combustível do carro por KM;
- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
 */

const precoEtanol = 4.3;
const precoGasolina = 5.20;
const tipoCombustivel = 'etanol';
const kmPorLitro = 10;
const distanciaEmKm = 100;

let litrosConsumidos = (distanciaEmKm / kmPorLitro);
let valorGasto;


if (tipoCombustivel === 'gasolina') {
    valorGasto = litrosConsumidos * precoGasolina;
} else if (tipoCombustivel === 'etanol') {
    valorGasto = litrosConsumidos * precoEtanol;
}

console.log(valorGasto.toFixed(2));