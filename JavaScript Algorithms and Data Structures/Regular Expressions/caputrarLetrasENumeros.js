/*O uso do hífen (-) para capturar um intervalo de caracteres não é limitado a letras. Ele também funciona para capturar intervalos de números.

Por exemplo, /[0-5]/ encontra qualquer número entre 0 e 5, incluindo ambos 0 e 5.

E também é possível combinar intervalos de letras e números em uma única classe de caracteres.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
Escreva uma única regex que encontra letras entre h e s e, também, números entre 2 e 6. Lembre-se de incluir as flags necessárias na regex. */

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line