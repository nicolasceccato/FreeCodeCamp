/*Você se lembra de quando mencionamos no último desafio que splice() pode receber até três parâmetros? Bem, você pode usar o terceiro parâmetro, composto por um ou mais elementos, para adicionar algo ao array. Isso pode ser incrivelmente útil para mudar rapidamente de um elemento, ou um conjunto de elementos, para outro.

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
A segunda ocorrência de 12 é removida, e adicionamos 13 e 14 no mesmo índice. O array numbers agora seria [ 10, 11, 12, 13, 14, 15 ].

Aqui, começamos com um array de números. Em seguida, passamos o seguinte para splice(): o índice no qual começar a deletar os elementos (3), o número de elementos a serem deletados (1) e os argumentos restantes (13, 14) serão inseridos com início no mesmo índice. Note que pode haver um número qualquer de elementos (separado por vírgulas) seguindo amountToDelete, cada um dos quais é inserido.

Definimos uma função, htmlColorNames, a qual recebe um array de cores HTML como argumento. Modifique a função usando splice() para remover os dois primeiros elementos do array e adicionar 'DarkSalmon' e 'BlanchedAlmond' em seus respectivos lugares.*/
function htmlColorNames(arr) {
    // Altere apenas o código abaixo desta linha
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    // Altere apenas o código acima desta linha
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));