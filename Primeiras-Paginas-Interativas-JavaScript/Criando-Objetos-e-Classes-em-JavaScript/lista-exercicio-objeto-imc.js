/**
 Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos: nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura);
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
 */

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc (){
        return this.peso / Math.pow(this.altura,2);
    }

    classificarImc (){
        console.log('Foi');
        const imc = this.calcularImc();
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
}

const pessoa1 = new Pessoa('José', 70, 1.75);
console.log('Meu IMC é '+pessoa1.calcularImc().toFixed(2) + ', e está classificado como '+ pessoa1.classificarImc());

const pessoa2 = new Pessoa('Michele', 113, 1.67);
console.log('Meu IMC é '+pessoa2.calcularImc().toFixed(2) + ', e está classificado como '+ pessoa2.classificarImc());

new Pessoa ('fulano', 10, 1).classificarImc();

class PessoaS {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
    }
}

new PessoaS('Renan', 30).descrever();