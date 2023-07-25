/*Use atribuição de desestruturação dentro do argumento para a função half para enviar apenas max e min para dentro da função.*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Altere apenas o código abaixo desta linha
const half = ({ max, min }) => {
    return (max + min) / 2.0;
}
  // Altere apenas o código acima desta linha