function multiplyAll(arr) {
    let product = 1;
    // Altere apenas o código abaixo desta linha
    for(let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++){
        product *= (arr[i][j]);
      }
    }
    // Altere apenas o código acima desta linha
    return product;
  }
  

const a = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(a);