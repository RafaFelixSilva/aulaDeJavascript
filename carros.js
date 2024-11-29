/* crie uma classe para representar carros.
Os carros possuem marca, uma cor e um gasto medio de combustivel por kilometro rodado.
crie um metodo que dado a quantidade de kilometros e o preco do combustivel nos de o valorgasto em reais para realizar o percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'prata', 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'preto', 1 / 10);
console.log(palio.calcularGastoDePercurso(70, 5));
