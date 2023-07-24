/*Substitua as duas atribuições com uma atribuição de desestruturação equivalente. Ainda deve ser atribuído às variáveis highToday e highTomorrow os valores de today e tomorrow do objeto HIGH_TEMPERATURES.*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Altere apenas o código abaixo desta linha

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES

  // Altere apenas o código acima desta linha