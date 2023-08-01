/*Ao escrever [a-z] você foi capaz de capturar todas as letras do alfabeto. Essa classe de caracteres é tão comum que existe uma forma reduzida de escrevê-la. Mas essa forma inclui alguns caracteres a mais.

Em JavaScript, você pode usar \w para capturar todas as letras do alfabeto. Isso é equivalente à classe de caracteres [A-Za-z0-9_]. Ela captura números e letras, tanto maiúsculas quanto minúsculas. Note que o underline (_) também é incluído nela.

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
As quatro chamadas a test retornam true.

Essas formas reduzidas de classes de caracteres podem ser chamadas de atalhos.

Use o atalho \w para contar o número de caracteres alfanuméricos em várias strings. */

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Altere esta linha
let result = quoteSample.match(alphabetRegexV2).length;