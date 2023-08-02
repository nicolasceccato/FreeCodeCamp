/*Restringir nomes de usuário possíveis
Nomes de usuário (usernames) são usados em toda a Internet. São o que fazem com que tenham uma identidade única em seus sites favoritos.

Você precisa verificar todos os usernames em um banco de dados. Existem algumas regras que os usuários precisam seguir quando criam os seus usernames.

Nomes de usuário só podem conter caracteres alfanuméricos.

Os números, se algum, precisam estar no fim da string. Pode haver zero ou mais números. Usernames não podem começar com números.

As letras podem ser maiúsculas ou minúsculas.

O tamanho de nomes de usuários precisa ser pelo menos dois. Um username de dois caracteres só pode conter letras.

Modifique a regex userCheck para que inclua as regras listadas.

 */
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/ig; // Altere esta linha
let result = userCheck.test(username);