/* Use uma atribuição de desestruturação com a sintaxe do rest para simular o comportamento de Array.prototype.slice(). removeFirstTwo() deve retornar um sub-array do array original list com os dois primeiros elementos omitidos. */


function removeFirstTwo(list) {
    // Altere apenas o código abaixo desta linha
    const [a, b, ...shorterList] = list;

    // Altere esta linha
    // Altere apenas o código acima desta linha
    return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);