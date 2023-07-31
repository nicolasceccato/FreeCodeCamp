/*Às vezes você precisa capturar um caractere, ou grupo de caracteres, que aparece uma ou mais vezes seguidas. Ou seja, que aparecem pelo menos uma vez e podem se repetir.

Você pode usar o caractere + para verificar se é o caso. Lembre-se que o caractere ou padrão precisa repetir-se consecutivamente. Ou seja, um atrás do outro.

Por exemplo, /a+/g encontra um resultado na string abc e retorna ["a"]. Mas o + também faz com que encontre um único resultado em aabc e retorne ["aa"].

Se a string fosse abab, a operação retornaria ["a", "a"] porque entre os dois a há um b. Por fim, se não houvesse nenhum a na string, como em bcd, nada seria encontrado.

Você quer capturar as ocorrências de s quando acontecer uma ou mais vezes em Mississippi. Escreva uma regex que use o caractere +. */

let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Altere esta linha
let result = difficultSpelling.match(myRegex);
console.log(result)