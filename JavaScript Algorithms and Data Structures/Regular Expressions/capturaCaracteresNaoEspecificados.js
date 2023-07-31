/* Até agora você aprendeu a criar classes de caracteres para capturar caracteres específicos, mas você também pode usá-las para capturar caracteres ausentes nelas. Esse tipo de classe de caracteres é chamada classe de caracteres negada.

Para criar uma classe de caracteres negada, você só precisa colocar um acento circunflexo (^) depois do colchete de abertura e à esquerda dos caracteres que você quer evitar.

Por exemplo, /[^aeiou]/gi encontra todos os caracteres que não são vogais. Observe que caracteres como ., !, [, @, / e espaços em branco são capturados - a classe de vogais negada apenas exclui os caracteres que são vogais.

Crie uma única regex que captura todos os caracteres que não são números ou vogais. Lembre-se de incluir as flags necessárias na regex.*/
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/ig; // Altere esta linha
let result = quoteSample.match(myRegex); // Altere esta linha