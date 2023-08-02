/*O tópico final é o temido laço infinito. Laços são ótimas ferramentas quando você precisa que o seu programa rode um bloco de código uma quantidade exata de vezes ou até que uma condição seja atendida, mas eles precisam de uma condição de parada que finalize esse laço. Laços infinitos têm alta probabilidade de congelar ou travar o navegador, e causa um caos na execução geral do programa, o que ninguém deseja.

Havia um exemplo de laço infinito na introdução dessa seção - esse laço não tinha uma condição de parada para sair do laço while dentro de loopy(). NÃO chame essa função!

function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
É trabalho do programador garantir que a condição de parada, a qual avisa ao programa quando sair de um laço, seja eventualmente alcançada. Um erro é incrementar ou decrementar uma variável contadora na direção errada da condição de parada. Outro erro é acidentalmente reiniciar uma variável contadora ou de índice dentro do laço, ao invés de incrementar ou decrementar.

A função myFunc() contém um laço infinito porque a condição de parada i != 4 nunca será false (para, então, quebrar o laço) - i vai incrementar em 2 a cada iteração, e passa direto por 4 já que i é ímpar no início. Corrija o operador de comparação para que o laço só rode enquanto i for menor ou igual a 4.*/

function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}