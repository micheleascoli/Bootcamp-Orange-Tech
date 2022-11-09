/**
IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / ( altura * altura )

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
 IMC em adultos condição: 
- Abaixo de 18.5 Abaixo do Peso;
- Entre 18.5 e 25 Peso Normal;
- Entre 25 e 30 Acima do Peso; 
- Entre 30 e 40 Obeso; 
- Acima de 40 Obesidade Grave;

 */


function calcularImc(peso, altura) {
    return peso / (Math.pow(altura, 2));
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do Peso';
    } else if ((imc >= 18.5) && (imc < 25)) {
        return 'Peso Normal';
    } else if ((imc >= 25) && (imc < 30)) {
        return 'Acima do Peso';
    } else if ((imc >= 30) && (imc <= 40)) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}


// Main

(function () {
    const peso = 70;
    const altura = 1.67;

    const imc = calcularImc(peso, altura);
   // console.log(imc.toFixed(2));
    console.log(classificarImc(imc));
})();



