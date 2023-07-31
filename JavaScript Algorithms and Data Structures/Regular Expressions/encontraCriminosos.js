/*Hora de testar as suas novas habilidades de regex. Um grupo de criminosos escapou da prisão, mas não sabemos quantos. No entanto, sabemos que eles ficam juntos quando estão no meio de outras pessoas. E você ficou responsável por encontrar todos eles.

Vamos revisitar maneiras de executar essa tarefa:

A regex /z+/ encontra a letra z quando ela aparece uma ou mais vezes seguidas. Ela encontra resultados em todas essas strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
Mas ela não encontra nada nessas strings, que não possuem z em lugar nenhum:

""
"ABC"
"abcabc"
Escreva uma regex gananciosa que encontra uma ou mais criminosos em um grupo de pessoas. Um criminoso pode ser identificado pela letra maiúscula C. */
let reCriminals = /C+/; // Altere esta linha