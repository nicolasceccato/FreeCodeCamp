/*Desafios anteriores mostraram que expressões regulares podem ser usadas para capturar um número de resultados. Elas também podem ser usadas para procurar em posições específicas de strings.

Mais cedo você usou o circunflexo (^) em classes de caracteres para procurar caracteres que não devem ser capturados, como em [^caracteresQueNãoQueremos]. Quando usados fora de classes de caracteres, o circunflexo serve para buscar a partir do começo de strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
A primeira chamada a test retorna true enquanto a segunda retorna false.

Use o circunflexo em uma regex para encontrar Cal, mas apenas no começo da string rickyAndCal. */

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Altere esta linha
let result = calRegex.test(rickyAndCal);