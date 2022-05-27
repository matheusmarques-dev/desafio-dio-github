// O que são vetores ou arrays

// Como declarar um array
let array = ['string', 1, true];
console.log(array);
// Pode guardar varios tipos de dados
let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array 4']];
console.log(array2);
console.log(array2[0]);
console.log(array2[3]);
// forEach: faz um for percorrendo e usando o valor e o indice da lista
array2.forEach(function(item, index){console.log(item, index)});
// Push adiciona no final da lista
array2.push('novo item');
console.log(array2);
// Pop remove um item no final da lista
array2.pop();
console.log(array2);
// shift tira um item do inicio da lista
array2.shift();
console.log(array2);
// unshift coloca um novo item no inicio da lista
array2.unshift('novo irem no inicio');
console.log(array2);
// indexof retorna o indice do item de uma lista
console.log(array2.indexOf(true));
// Splice Remove ou subtitui um item pelo índice;
array2.splice(0, 3);
console.log(array2);
// slice retorna uma parte da lista existente
let novoArray = array2.slice(0, 3);

// Objetos
let object = { string: 'string', number: 1, boolean: true, array: ['array'], object: {objectInterno: 'objeto interno'}};
console.log(object.object.objectInterno);

var string = object.string;
console.log(string);

var array3 = object.array;
console.log(array3)

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno)