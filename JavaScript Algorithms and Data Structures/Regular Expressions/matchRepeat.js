/*Até agora você foi capaz apenas de extrair ou buscar um resultado de uma vez.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
match retorna ["Repeat"] aqui.

Para buscar ou extrair um padrão além do primeiro resultado, você pode usar a flag de busca global g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
Aqui, match retorna o valor ["Repeat", "Repeat", "Repeat"]

Usando a regex starRegex, encontre e extraia ambas ocorrências da palavra Twinkle da string twinkleStar.

Observação:
você pode usar múltiplas flags em uma regex: /search/gi */

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // Altere esta linha
let result = twinkleStar.match(starRegex); // Altere esta linha

console.log(result)