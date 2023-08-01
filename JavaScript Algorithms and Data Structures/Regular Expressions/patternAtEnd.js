/*No desafio anterior, você aprendeu a usar o circunflexo para capturar padrões no início de strings. Há também uma maneira de buscar padrões no fim de strings.

Se você colocar um cifrão, $, no fim da regex, você pode buscar no fim de strings.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
A primeira chamada a test retorna true enquanto a segunda retorna false.

Use o cifrão ($) para capturar a string caboose no fim da string caboose. */
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Altere esta linha
let result = lastRegex.test(caboose);