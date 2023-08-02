/*Você aprendeu a procurar por espaço em branco usando \s com um s minúsculo. Você também pode buscar tudo exceto espaços em branco.

Busque não espaços em branco usando \S com um s maiúsculo. Este atalho não captura espaços em branco, retorno de carro, tabulações, feeds de formulário ou quebras de linha. O atalho é equivalente à classe de caracteres [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
O valor retornado pelo método .length aqui é 32.

Modifique a regex countNonWhiteSpace para que encontre tudo exceto espaços em branco em uma string. */
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/ig; // Altere esta linha
let result = sample.match(countNonWhiteSpace);