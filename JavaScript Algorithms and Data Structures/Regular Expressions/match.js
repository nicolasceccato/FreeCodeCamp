/*Até agora, você só tem verificado se existe ou não um padrão dentro de uma string. Você também pode extrair os resultados encontrados por meio do método .match().

Para usar o método .match(), aplique o método em uma string e passe a regex dentro dos parênteses.

Exemplo:

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
Aqui, o primeiro match retorna ["Hello"] e, o segundo, ["expressions"].

Note que o método .match se usa de forma "contrária" ao método .test que você usou até então:

'string'.match(/regex/);
/regex/.test('string');
Aplique o método .match() para extrair a string coding. */


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Altere esta linha
let result = extractStr.match(codingRegex); // Altere esta linha