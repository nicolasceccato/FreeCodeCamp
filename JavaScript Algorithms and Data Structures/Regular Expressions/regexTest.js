/*Expressões regulares são usadas em linguagens de programação para encontrar e extrair partes de strings. Cria-se padrões que ajudam a encontrar tais partes.

Se você quiser encontrar a palavra the na string The dog chased the cat, você poderia usar a seguinte expressão regular: /the/. Note que aspas não são necessárias ao redor da expressão regular.

O JavaScript oferece múltiplas maneiras de usar regexes. Uma dessas maneiras é com o método .test(). O método .test() aplica a regex à string dentro dos parênteses e retorna true caso encontre o padrão ou false caso contrário.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
O método test retorna true aqui.

Aplique a regex myRegex na string myString usando o método .test(). */

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Altere esta linha