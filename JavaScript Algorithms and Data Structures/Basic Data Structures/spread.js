/*Enquanto slice() nos permite sermos seletivos sobre quais elementos de um array copiar, entre várias outras tarefas úteis, o novo operador spread do ES6 nos permite facilmente copiar todos os elementos de um array, em ordem, com uma sintaxe simples e altamente legível. A sintaxe de spread é simplesmente essa: ...

Na prática, podemos usar o operador "spread" para copiar um array assim:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
thatArray é igual a [true, true, undefined, false, null]. thisArray permanece inalterado e thatArray contém os mesmos elementos que thisArray.

Definimos uma função, copyMachine que recebe arr (um array) e num (um número) como argumentos. A função deve retornar um novo array composto de num cópias de arr. Fizemos a maior parte do trabalho para você, mas isso ainda não está certo. Modifique a função usando a sintaxe de spread para que ela funcione corretamente (dica: outro método já mencionado pode ser útil aqui!).*/

function copyMachine(arr, num) {
    let newArr = [];
    let i = 0;
    while (num >= 1) {
        // Altere apenas o código abaixo desta linha

        let newestArray = [...arr];
        newArr[i] = newestArray
        // Altere apenas o código acima desta linha
        num--;
        i++;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));