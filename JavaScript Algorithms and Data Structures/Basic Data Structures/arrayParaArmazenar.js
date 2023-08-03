/*Abaixo está um exemplo da implementação mais simples de uma estrutura de dados array. Isso é conhecido como array unidimensional, significando que tem apenas 1 nível de profundidade, ou que não possui nenhum outro array aninhado dentro de si. Note que possui booleans, strings e numbers, entre outros tipos de dados do JavaScript válidos:

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
A chamada a console.log exibe 7.

Todos os arrays possuem uma propriedade length, conforme mostrado acima, que pode ser muito facilmente acessado com a sintaxe Array.length. Uma implementação mais complexa de um array pode ser vista abaixo. Isso é conhecido como um array multidimensional, ou um array que contém outros arrays. Note que esse array também contém objetos JavaScript, os quais examinaremos bem de perto na próxima seção. Por agora, tudo que você precisa saber é que arrays também são capazes de armazenar objetos complexos.

let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
Definimos uma variável chamada yourArray. Complete a instrução atribuindo um array de pelo menos 5 elementos de comprimento à variável yourArray. Seu array deve conter pelo menos uma string, um número e um booleano.*/


let yourArray = ['one', true, 1, true, 1 ]; // Altere esta linha