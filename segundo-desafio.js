/* faca um programa para calcular o valor de uma viagem.

Voce tera 5 variaveis. Sendo elas:
1- preco do etanol;
2- preco da gasolina;
3- o tipo de combustivel que esta no carro;
4- gasto medio de combustivel do carro por KM;
5- distancia em KM da viagem; */

const combustivelEtanol = false;
const combustivelGasolina = true;
const precoEtanol = 5.79;
const precoGasolina = 6.19;

const gastoMedioPorKm = 11;
const distanciaEmKm = 615;
const gastoTotalEmEtanol = (distanciaEmKm / gastoMedioPorKm) * precoEtanol;
const gastoTotalEmGasolina = (distanciaEmKm / gastoMedioPorKm) * precoGasolina; 

if(combustivelEtanol) {
    console.log("O valor total para essa viagem em Etanol sera de $" + gastoTotalEmEtanol.toFixed(2));
} else if(combustivelGasolina) {
    console.log("O valor total para essa viagem em Gasolina sera de $" + gastoTotalEmGasolina.toFixed(2));
}