/*Ignorar maiúsculas e minúsculas ao buscar
Até agora você escreveu regexes para encontrar strings literais. Mas, às vezes, você pode querer encontrar caixas diferentes.

Caixa (-alta ou -baixa) é a diferença entre letras maiúsculas e minúsculas. São exemplos de caixa alta: A, B e C. a, b e c são exemplos de caixa baixa.

Você pode encontrar ambas as caixas usando algo que chamamos de flag. Existem várias flags, mas agora nós queremos a flag que ignora a caixa - a flag i. Para usá-la é só colocar ao fim da regex. Por exemplo, escrever /ignorecase/i é uma forma. Essa regex pode encontrar as strings ignorecase, igNoreCase e IgnoreCase (e todas as outras combinações de maiúsculas e minúsculas).

Escreva uma regex fccRegex que encontre freeCodeCamp, não importa em que caixa esteja. A regex não deve buscar abreviações ou variações com espaços.

 */


let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Altere esta linha
let result = fccRegex.test(myString);