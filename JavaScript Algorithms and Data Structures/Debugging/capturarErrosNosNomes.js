/*Os métodos console.log() e typeof são duas formas primárias para verificar valores intermediários e tipos de saída do programa. Agora é hora de conhecer as formas comuns que um bug assume. Um problema de nível de sintaxe que digitadores rápidos podem deixar passar é um simples erro de digitação incorreta.

Caracteres deslocados, faltando ou capitalizados erroneamente em um nome de variável ou função farão com que o navegador procure por um objeto que não existe - e reclame na forma de um erro de referência. Variáveis e funções JavaScript são sensíveis a caracteres maiúsculos e minúsculos.

Corrija os dois erros de ortografia no código para que o cálculo netWorkingCapital funcione.*/
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);