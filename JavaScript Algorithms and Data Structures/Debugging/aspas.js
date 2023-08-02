/*JavaScript nos permite o uso de aspas simples (') e duplas (") para declarar uma string. Decidir qual delas usar geralmente é uma questão de preferência pessoal, com algumas exceções.

Ter duas opções é ótimo quando uma string possui contrações ou outros pedaços de texto que estão entre aspas. Apenas tome cuidado para que você não feche uma string muito cedo, o que causa erro de sintaxe.

Aqui estão alguns exemplos de mistura de aspas:

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
As duas primeiras estão corretas, mas a terceira não.

Claro, não há problema em usar apenas um estilo de aspas. Você pode escapar as aspas dentro de uma string ao usar o caractere barra invertida (\):

const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
Corrija a string para que use aspas diferentes para o valor de href ou escape as aspas existentes. Mantenha as aspas duplas ao redor de toda a string.*/

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);