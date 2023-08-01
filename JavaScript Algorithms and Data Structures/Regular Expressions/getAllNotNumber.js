/*O último desafio mostrou como procurar dígitos usando o atalho \d com um d minúsculo. Você também pode procurar não dígitos usando um atalho semelhante que usa um D maiúsculo.

O atalho para procurar não dígitos é \D. Esse atalho é o mesmo que [^0-9], que serve para procurar qualquer caractere que não seja um dígito de zero a nove.

Use o atalho \D para contar quantos não dígitos existem em títulos de filmes. */
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/ig; // Altere esta linha
let result = movieName.match(noNumRegex).length;