// Sintaxe da Função
function sayMyName(name) {
    console.log('Your name is: '+ name);
}

sayMyName('Michele');

// Matemática
function quadrado(valor) {
    return Math.pow(valor,2);
}

const quadradoDoNumero = quadrado(2);
console.log(quadradoDoNumero);

//Incrementos
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

const valor = incrementarJuros(100,10);
console.log(valor);
console.log(incrementarJuros(100,25));