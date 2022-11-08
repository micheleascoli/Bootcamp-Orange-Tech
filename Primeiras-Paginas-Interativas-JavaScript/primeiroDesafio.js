/**
Faça um programa para calcular o valor de uma viagem.

Você terá trê variáveis. Sendo elas:
- Preço do combustível;
- Gasto médio de combustível do carro por KM;
- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
 */

const precoCombustivel = 5.79;
const kmPorLitro = 12.0;
const distanciaEmKm = 1580;

let litrosConsumidos = (distanciaEmKm / kmPorLitro);
let valorGasto = litrosConsumidos * precoCombustivel;

// Outra forma:
//let valorGasto = (distanciaEmKm / kmPorLitro) * precoCombustivel;

console.log(valorGasto.toFixed(2));


