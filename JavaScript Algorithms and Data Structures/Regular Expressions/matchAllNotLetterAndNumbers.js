/*Você aprendeu que você pode usar um atalho para capturar alfanuméricos [A-Za-z0-9_] usando \w. Você pode querer capturar exatamente o oposto disso.

Você pode capturar não alfanuméricos usando \W ao invés de \w. Observe que o atalho usa uma maiúscula. Este atalho é o mesmo que escrever [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
A primeira chamada a match retorna ["%"] enquanto o segundo retorna ["!"].

Use o atalho \W para contar o número de caracteres não alfanuméricos em várias strings. */
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/ig; // Altere esta linha
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result)