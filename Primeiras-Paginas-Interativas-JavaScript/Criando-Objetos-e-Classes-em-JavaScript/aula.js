
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}. Nasci em ${this.anoDeNascimento}`);
    }
}

const p1 = new Pessoa('Michele O Ascoli', 26);
// p1.nome = 'Michele O Ascoli';
// p1.idade = 26;

const p2 = new Pessoa('A A', 70);
// p2.nome = 'A A';
// p2.idade = 55

p1.descrever();
p2.descrever();

// const pessoa1 = {
//     nome: 'Michele O Ascoli',
//     idade: 26,

//     descrever: function (){
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
//     }
// };


// pessoa.descrever = function(){
//     console.log(`Meu nome é ${this.nome}.`);
// }

// pessoa.descrever();


/** Outra forma de acessar os valores */
// const atributo = 'idade';

// anotação de coleção
// console.log(pessoa[atributo]);
