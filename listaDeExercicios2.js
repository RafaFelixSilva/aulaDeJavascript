/* o IMC  eh um criterio de organizacao mundial de saude para dar indicacao sobre a condicao de peso de uma pessoa adulta.

formula IMC:
IMC = peso / (altura * altura)

elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condicao de acordo com a tabela abaixo.

IMC em adultos:
- abaixo de 18.5 abaixo do peso;
- entre 18.5 e 25 peso normal;
- entre 25 e 30 acima do peso;
- entre 30 e 40 obeso;
- acima de 40 obesidade grave;
*/

const peso = 68;
const altura = 1.65;
const imc = peso / (altura * altura);
console.log(imc);
if (imc < 18.5) {
    console.log("Adulto abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Adulto em peso normal");
} else if (imc >= 25 && imc <= 30){
    console.log("Adulto acima do peso");
} else if(imc > 30 && imc <= 40) {
    console.log("Adulto obeso");
}else {
    console.log("Adulto em obesidade grave");
}