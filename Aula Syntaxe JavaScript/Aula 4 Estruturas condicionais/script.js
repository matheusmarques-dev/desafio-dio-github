// Estrutura de decisão
var jogador1 = 0;
var jogador2 = 1;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos'):
console.log('Jogadores Inválidos');
if (jogador1 != -1) {
    if (jogador1 > 0 && jogador2 == 0) {
        console.log('Jogador 1 marcou ponto');
        placar = jogador1 > jogador2;
    } else if (jogador2 > 0 && jogador1 == 0){
        console.log('Jogador 2 marcou ponto');
        placar = jogador2 > jogador1
    } else {
        console.log('Ninguém marcou ponto');
    }
}

switch (placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
        default:
            console.log('ninguem ganhou');

}

// Estrutura de repetição
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}
// for executa a instrução até ela ser falsa
for (let indice = 0; indice < array.length; indice++){
    console.log(indice);
}
// for/in
for (let i in array){
    console.log(i);
}
// Com object
for (i in object){
    console.log(i);
}
// For/of
for (i of array){
    console.log(i);
}

// for/of com object
for(i of object.propriedade1){
    console.log(i);
}

// While

var a = 0;

while (a < 10){
    a++;
    console.log(a);
}
a = 0;
// Do/while
do {
    a++;
    console.log(a);
} while (a < 10);