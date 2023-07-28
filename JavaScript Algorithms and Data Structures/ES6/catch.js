
/*catch é o método usado quando a promessa é rejeitada. Ele é executado imediatamente após o método reject da promessa ser chamado. Aqui está a sintaxe:

myPromise.catch(error => {

});
O parâmetro error é o argumento passado para o método reject.

Adicione o método catch à sua promessa. Use error como parâmetro de sua função de callback e exiba o valor de error no console.

 */


const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer está definido como falso para representar uma resposta sem sucesso de um servidor
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
        makeServerRequest.catch(error => {
            console.log(error);
        });
    }
});

makeServerRequest.then(result => {
    console.log(result);
});