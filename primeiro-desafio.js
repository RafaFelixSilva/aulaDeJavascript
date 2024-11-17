/* faca um programa para calcular o valor de uma viagem.

voce tera 3 variaveis. Sendp elas:
1 - preco do combustivel;
2 - gasto medio de combustivel do carro por KM;
3 - distancia em KM da viagem;

Imprima no console o valor que sera gasto para realizar esta viagem. */

const precoCombustivel = 5.29;
const kmPorLitros = 10; 
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log("O valor gasto do combustivel sera de $"  + valorGasto.toFixed(2));