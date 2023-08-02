/*Você pode especificar um número mínimo e um máximo de capturas com chaves. Às vezes, você só quer um número específico de capturas.

Para especificar este número, apenas escreva-o dentro das chaves.

Por exemplo, você pode escrever a regex /ha{3}h/ para capturar a letra a 3 vezes na string hah.

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
As três chamadas a test acima retornam, na ordem, os valores: false, true e false.

Modifique a regex timRegex para que capture quatro ms na string Timber.

 */
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Altere esta linha
let result = timRegex.test(timStr);