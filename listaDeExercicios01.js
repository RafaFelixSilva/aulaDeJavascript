/* faca um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade  calcule e imprima a sua media e a sua classificacao conforme a tabela abaixo.

media = (nota 1 + nota 2 + nota 3) / 3 ;

classificacao:
- media menor que 5, reprovacao;
- media entre 5 e 7, recuperacao;
- media acima de 7, passou de semestre;
*/

const nota1 = 5;
const nota2 = 8;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2));
if(media < 5) {
    console.log("Aluno Reprovado");
} else if(media => 5 && media <= 7) {
    console.log("Aluno Em Recuperacao");
} else if(media > 7) {
    console.log("Aluno Aprovado!");
}