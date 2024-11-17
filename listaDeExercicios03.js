/* elabore um algoritmo que calcule o que se deve ser pago por um produto, considerando o preco normal de etiqueta e a escolha da condicao de pagamento.
utilize os codigos da tabela a seguir para ler qual a condicao de pagamento escolhida e efetuar o calculo adequado.

codigo condicao de pagamento:
- a vista debito, recebe 10% de desconto;
- a vista no dinheiro ou pix, recebe 15% de desconto;
- em duas vezes, preco normal da etiqueta sem juros;
- acima de duas vezes, preco normal da etiqueta mais juros de 10%;
*/

const precoProduto = 250;
const formaDePagamento = 4;

if(formaDePagamento === 1){
    const pagamentoDebito = precoProduto - (precoProduto * .1);
    console.log("Pagamento escolhido em Debito que sera no valor de £" + pagamentoDebito);
}else if(formaDePagamento === 2) {
    const pagamentoPix = precoProduto - (precoProduto * .15);
    console.log("Pagamento escolhido no Pix ou em Dinheiro que sera no valoe de £" + pagamentoPix);
}else if(formaDePagamento === 3) {
    const pagamento2x = precoProduto;
    console.log("Pagamento escolhido em duas vezes que sera no valor de £" + pagamento2x);
}else if(formaDePagamento === 4) {
    const pagamentoAcima2x = precoProduto * 1.1;
    console.log("Pagamento escolhido acima de duas vezes que sera no valor de £" + pagamentoAcima2x);
}
