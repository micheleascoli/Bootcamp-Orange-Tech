const pessoa = {
    nome: 'Michele O Ascoli',
    idade: 26,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
};

pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}.`);
}

pessoa.descrever();

