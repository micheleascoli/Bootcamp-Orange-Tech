// Crie um programa que dado um número imprima a sua tabuada.

function criarTabuada(numero){
    for(i=0; i<=3; i++){
        if(i===0){
            console.log('if 0');
            for(j=1; j<=10; j++){
                console.log( numero +' + '+ (j+1) + ' = ' + (numero+j) );
            }
        } else if(i===1){
            for(j=1; j<=10; j++){
                console.log(numero +' - '+ j + ' = ' + (numero-j) );
            }
        }else if(i===2){
            for(j=1; j<=10; j++){
                console.log(numero +' x '+ j + ' = ' + (numero*j) );
            }
        }else{
            for(j=1; j<=10; j++){
                console.log(numero +' / '+ j + ' = ' + (numero/j) );
            }
        }
        
    }
}

const numero = 2;

criarTabuada(10);

