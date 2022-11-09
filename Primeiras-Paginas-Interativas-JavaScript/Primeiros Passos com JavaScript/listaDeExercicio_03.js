/**
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:

- À vista débito, recebe 10% de desconto;
- À vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;


 */

const valorProduto = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log((valorProduto * 0.9).toFixed(2));
} else if (formaPagamento === 2) {
    console.log((valorProduto * 0.85).toFixed(2));
} else if (formaPagamento === 3) {
    console.log((valorProduto).toFixed(2));
} else if (formaPagamento === 4) {
    console.log((valorProduto * 1.1).toFixed(2));
}