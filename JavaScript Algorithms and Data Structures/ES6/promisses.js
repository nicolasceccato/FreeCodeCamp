/* Promessas são úteis quando você tem um processo que leva uma quantidade de tempo desconhecido para ser finalizado (ou seja, algo assíncrono). Muitas vezes, uma requisição a um servidor. Fazer uma requisição a um servidor leva tempo, e após a requisição ser finalizada, você geralmente quer fazer algo com a resposta retornada. Isso pode ser feito usando o método then. O método then é executado imediatamente após a promessa ser cumprida com resolve. Exemplo:

myPromise.then(result => {

});
O parâmetro result vem do argumento dado ao método resolve.

Adicione o método then à sua promessa. Use result como parâmetro de sua função de callback e exiba result no console.*/

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer está definido como verdadeiro para representar uma resposta de sucesso de um servidor
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
        makeServerRequest.then(result => {
            console.log(result);
        })
    } else {
        reject("Data not received");
    }
});