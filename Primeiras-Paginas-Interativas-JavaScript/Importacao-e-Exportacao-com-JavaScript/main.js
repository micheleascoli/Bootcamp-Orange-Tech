/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
 */

const { gets, print} = require('./funcoes-auxiliares');

const numerosSorteados = [];

// for (let i = 0; i < 5; i++) {
//     const numerosSorteado = gets();
//     numerosSorteados.push(numerosSorteado);
// }

let numeroMaior = 0;

// for (let i = 0; i < numerosSorteados.length; i++) {
//     if(numerosSorteados[i] > numeroMaior){
//         numeroMaior = numerosSorteados[i];
//     }    
// }


// Outra forma:



for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    if(numerosSorteado > numeroMaior){
        numeroMaior = numerosSorteado;
    }    
    
}

print(numeroMaior);