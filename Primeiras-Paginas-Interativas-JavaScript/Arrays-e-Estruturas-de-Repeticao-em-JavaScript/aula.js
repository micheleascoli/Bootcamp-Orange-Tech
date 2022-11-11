const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(7);
notas.push(9);

let soma=0;

for(let i=0; i<notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
}

console.log(soma);

const media = soma/notas.length;
console.log(media);



// const alunos = ['João', 'Maria', 'Rita'];

// alunos.push('Renan');

// alunos[3] = 'Vitor';

// alunos.push(10);

// //remove o ultimo
// alunos.pop();

// //remove o primeiro
// alunos.shift();

// console.log(alunos);


// const nome = 'Michele de Oliveira Ascoli'

// for (let i = 0; i < nome.length; i++) {
//     const letra = nome[i];
//     console.log(letra);
    
// }




