/*Definimos uma função chamada countdown com um parâmetro (n). A função deve usar recursão para retornar um array contendo inteiros n até 1 com base no parâmetro n. Se a função é chamada com um número menor que 1, a função deve retornar um array vazio. Por exemplo, chamar essa função com n = 5 deve retornar o array [5, 4, 3, 2, 1]. Sua função precisa usar recursão para chamar a si mesma e não depender de nenhum tipo de laço.*/
// Altere apenas o código abaixo desta linha
function countdown(n) {
    if (n < 1) {
        return [];
    }
    else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
  // Altere apenas o código acima desta linha
 