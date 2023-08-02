/*Lembre-se de que você pode usar o sinal de + para procurar por uma ou mais ocorrências e o asterisco * para procurar por zero ou mais ocorrências. Eles são convenientes, mas às vezes você precisa capturar um número exato de caracteres.

Você pode especificar um número mínimo e um máximo de capturas com especificadores de quantidade. Para usar especificadores de quantidade, usa-se chaves: { e }. Você pode especificar os dois números dentro delas para restringir as capturas.

Por exemplo, se você quiser encontrar a letra a de 3 a 5 vezes na string ah, você pode escrever a regex /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
A primeira chamada a test retorna true enquanto a segunda retorna false.

Altere a regex ohRegex para que capture a frase Oh no, mas apenas quando nela houver de 3 a 6 letras h's. */
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6} no/ig; // Altere esta linha
let result = ohRegex.test(ohStr);