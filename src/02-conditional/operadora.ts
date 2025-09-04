import promptSync from "prompt-sync";
const prompt = promptSync();

const qtd = Number(prompt("Digite a quantidade de minutos: "));

if(qtd > 100){
    const novoValor = qtd - 100;
    const valor = 50 + (novoValor * 2);
    console.log(`Valor a pagar: R$${valor.toFixed(2)}`);
}else {
    console.log(`Valor a pagar: R$50.00`);
}