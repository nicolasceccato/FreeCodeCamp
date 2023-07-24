/*Modifique a função sum usando o parâmetro rest de tal forma que a função sum seja capaz de receber qualquer número de argumentos e retornar a soma deles.*/
const sum = (...args) => {

    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}