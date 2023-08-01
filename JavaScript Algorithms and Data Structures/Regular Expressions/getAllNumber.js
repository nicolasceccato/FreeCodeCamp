/*Você aprendeu atalhos para padrões comuns de strings como alfanuméricos. Outro padrão comum é o de apenas dígitos ou números.

O atalho para procurar caracteres numéricos é \d, com um d minúsculo. Esse atalho é o mesmo que [0-9], que serve para procurar qualquer dígito de zero a nove.

Use o atalho \d para contar quantos dígitos existem em títulos de filmes. Números por extenso, como "seis" em vez de 6, não contam.*/
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/ig; // Altere esta linha
let result = movieName.match(numRegex).length;