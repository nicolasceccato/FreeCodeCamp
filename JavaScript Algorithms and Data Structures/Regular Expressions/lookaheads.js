/*Lookaheads ("olhar à frente") são padrões que dizem ao JavaScript para procurar outros padrões ao longo da string sem capturá-los. Eles podem ser úteis quando é necessário fazer diversas verificações na mesma string.

Existem dois tipos de lookahead: o lookahead positivo e o lookahead negativo.

Lookaheads positivos garantem que o padrão especificado se encontra à frente, mas não o capturam. Usa-se (?=...), onde ... é o padrão a ser procurado, para escrever lookaheads positivos.

Lookaheads negativos, por outro lado, garantem que o padrão especificado não se encontra à sua frente na string. Para usar lookaheads negativos, escrevemos (?!...) onde ... é o padrão que você quer ter certeza que não está lá. O restante do padrão é validado se o padrão do lookahead negativo estiver ausente.

É fácil se confundir com lookaheads, mas uns exemplos podem ajudar.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
As duas chamadas a match retornam ["q"].

Validar dois padrões diferentes em uma string é considerado um uso mais prático de lookaheads. Neste não tão aprimorado validador de senhas, os lookaheads procuram por 3 a 6 caracteres e pelo menos um número, respectivamente, na string:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
Use os lookaheads na pwRegex para que correspondam a senhas de mais de 5 caracteres e que tenham dois algarismos consecutivos.*/
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\D*\d)(?=\D*\d{2})/; // Altere esta linha
let result = pwRegex.test(sampleWord);
