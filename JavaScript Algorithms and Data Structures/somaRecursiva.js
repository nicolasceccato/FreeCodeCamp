/*Escreva uma função recursiva, sum(arr, n), que retorna a soma dos primeiros n elementos de um array arr.*/

function sum(arr, n) {
    // Altere apenas o código abaixo desta linha
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[ n - 1];
    }
    // Altere apenas o código acima desta linha
}

console.log(sum([2, 3, 4], 1));