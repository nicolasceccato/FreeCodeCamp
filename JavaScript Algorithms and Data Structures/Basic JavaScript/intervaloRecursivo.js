/*Definimos uma função chamada rangeOfNumbers com dois parâmetros. A função deve retornar um array de inteiros a qual começa com um número representado pelo parâmetro startNum e terminar com um número representado pelo parâmetro endNum. O número inicial sempre será menor ou igual ao número final. Sua função precisa usar recursão para chamar a si mesma e não deve depender de nenhum tipo de laço. Também deve funcionar para casos onde startNum e endNum tiverem o mesmo valor.
*/
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        let nums = rangeOfNumbers(startNum, endNum - 1);
        nums.push(endNum);
        return nums;
    }
};