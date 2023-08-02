/*Às vezes é necessário salvar informações, incrementar contadores ou redefinir variáveis dentro de um laço. Um problema em potencial é quando variáveis deveriam ser reinicializadas e, não são, ou vice versa. Isso é particularmente perigoso se você acidentalmente redefinir a variável sendo usada para a condição de parada, causando um laço infinito.

Imprimir os valores das variáveis em cada ciclo do seu laço usando console.log() pode ajudar a descobrir comportamentos com bugs relacionados a reiniciar ou falhar ao reiniciar uma variável.

A seguinte função deveria criar um array de duas dimensões com m linhas e n colunas de zeros. Infelizmente, não está produzindo a saída esperada porque a variável row não está sendo reiniciada (definida de volta para um array vazio) no laço mais externo. Corrija o código para que retorne o array de zeros correto (dimensão: 3x2), que se parece com [[0, 0], [0, 0], [0, 0]].

*/
function zeroArray(m, n) {
    // Cria um array 2-D com m linhas e n colunas de zeros
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adicione a m-ésima linha em newArray

        for (let j = 0; j < n; j++) {
            // Coloca um número n de zeros na linha atual para criar as colunas
            row.push(0);

        }
        // Coloca a linha atual, que agora contém n zeros, no array
        newArray.push(row);
        row = []

    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
