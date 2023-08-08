/*Tanto push() e unshift() possuem métodos correspondentes que são quase opostos funcionais: pop() e shift(). Como você já pode ter adivinhado, em vez de adicionar, pop() remove um elemento do fim de um array, enquanto shift() remove um elemento do início. A diferença chave entre pop() e shift() e seus primos push() e unshift(), é que nenhum dos métodos recebe parâmetros. Cada um deles só permite que seja modificado um elemento por vez em um array.

Vamos dar uma olhada:

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
greetings teria o valor ['whats up?', 'hello'].

greetings.shift();
greetings teria o valor ['hello'].

Nós também podemos retornar o valor do elemento removido com qualquer método dessa forma:

let popped = greetings.pop();
greetings teria o valor [] e popped teria o valor hello.

Nós definimos uma função, popShift, a qual recebe um array como argumento e retorna um novo array. Modifique a função, usando pop() e shift(), para remover o primeiro e o último elemento do array passado como argumento, e atribua os valores removidos para suas variáveis correspondentes, para que o array retornado contenha seus valores.

*/
function popShift(arr) {
    let popped = arr.pop(); // Altere esta linha
    let shifted = arr.shift(); // Altere esta linha
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));