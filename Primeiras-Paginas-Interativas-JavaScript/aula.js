
/** Aula 1 - Variáveis e Operadores */

let variavel = 10;

const pi = 3.14;

//console.log(variavel);

variavel = 20;

variavel = variavel / 10;

//console.log(variavel);


/** Aula 2 - Estruturas Condicionais */

const camisetaAzul = true;
const camisetaVermelha = false;

// Numero Par

const numero = 12;
const numeroPar = (numero % 2) === 0;

if ((numero % 2) === 0) {
    console.log('Par');
} else {
    console.log('Impar');
}

// Numero Divisível

const numeroDivisivel = (numero % 5) === 0;

if (numero === 0){
    console.log('O número é inválido')
} else if (numeroDivisivel) {
    console.log('Sim');
} else {
    console.log('Não');
}