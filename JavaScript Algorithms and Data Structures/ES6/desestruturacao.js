/*Substitua as duas atribuições com a atribuição de desestruturação equivalente. Ainda deve ser atribuído às valores today e tomorrow os valores de today e tomorrow do objeto HIGH_TEMPERATURES. */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Altere apenas o código abaixo desta linha

/*const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;
*/
const { today, tomorrow } = HIGH_TEMPERATURES

  // Altere apenas o código acima desta linha