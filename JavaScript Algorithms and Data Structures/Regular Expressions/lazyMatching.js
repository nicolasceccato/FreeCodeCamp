/*Em expressões regulares, uma captura gananciosa encontra a parte mais longa o possível de uma string em que a regex atua e a retorna como resultado. A alternativa se chama captura preguiçosa e ela encontra o menor pedaço possível de uma string que satisfaz a regex.

Você pode aplicar a regex /t[a-z]*i/ à string "titanic". Essa regex é basicamente um padrão que começa com t, termina com ie tem algumas letras no meio delas.

Expressões regulares são gananciosas por padrão, então o resultado seria ["titani"]. Ou seja, a maior string o possível que atende ao padrão é encontrada.

Mas você pode usar o caractere ? para torná-la preguiçosa. Aplicar a regex adaptada /t[a-z]*?i/ à string "titanic" retorna ["ti"].

Observação: ler HTML com expressões regulares deve ser evitado, mas procurar uma string HTML usando expressões regulares é perfeitamente aceitável.

Arrume a regex /<.*>/ para que retorne a tag HTML <h1> mas não a linha "<h1>Winter is coming</h1>". Lembre-se de que o caractere curinga . em uma expressão regular captura qualquer caractere. */


let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/ig; // Altere esta linha
let result = text.match(myRegex);
console.log(result)