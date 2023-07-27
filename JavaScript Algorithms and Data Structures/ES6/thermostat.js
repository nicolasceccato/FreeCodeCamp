/* Use a palavra-chave class para criar a classe Thermostat. O constructor aceita uma temperatura Fahrenheit.

Na classe, crie um getter para obter a temperatura em Celsius e um setter para definir a temperatura em Celsius.

Lembre-se de que C = 5/9 * (F - 32) e F = C * 9.0 / 5 + 32, aonde F é o valor da temperatura em Fahrenheit e C é o valor da mesma temperatura em Celsius.

Observação: quando você implementa isso, você vai rastrear a temperatura dentro da classe em uma escala, ou Fahrenheit ou Celsius.

Esse é o poder de um getter e um setter. Você está criando uma API para outro uso, que pode pegar o resultado correto independente de qual está rastreando.

Em outras palavras, você está abstraindo detalhes de implementação do usuário. */
// Altere apenas o código abaixo desta linha
class Thermostat {
    constructor(fahrenheit) {
        this._temperature = (5 / 9) * (fahrenheit - 32);
    }
    get temperature() {
        return this._temperature;
    }
    set temperature(newTemperature) {
        this._temperature = newTemperature;
    }
}
// Altere apenas o código acima desta linha

const thermos = new Thermostat(76); // Definição na escala Fahrenheit
let temp = thermos.temperature; // 24,44 em Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 em Celsius