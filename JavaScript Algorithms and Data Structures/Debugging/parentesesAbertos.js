/*Outro erro de sintaxe para estar ciente é que todas as aberturas de parênteses, colchetes, chaves e aspas têm um par de fechamento. Esquecer um pedaço tende a acontecer quando você está editando um código existente e inserindo itens com um dos tipos de pares. Além disso, tenha cuidado ao aninhar blocos de código em outros, como ao adicionar uma função de callback como um argumento a um método.

Uma maneira de evitar esse erro é, assim que o caractere de abertura é digitado, incluir imediatamente o caractere de fechamento, mover o cursor entre eles e continuar programando. Felizmente, a maioria dos editores de código modernos geram a segunda parte do par automaticamente.

Corrija os dois erros de pares no código.*/

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);