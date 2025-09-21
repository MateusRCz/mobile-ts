import promptSync from "prompt-sync";
import { forEachChild } from "typescript";
const prompt = promptSync();

let n = Number(prompt("Serao digitados dados de quantos produtos? "));
let produtos: {nome: string; precoCompra: number, precoVenda: number, lucro: number} [] = [];
let lucroAbaixo10 = 0;
let lucroEntre10e20 = 0;
let lucroAcima20 = 0;
let valorTotaldeCompra = 0;
let valorTotaldeVenda = 0;
let lucroTotal = 0;

for (let i = 0; i < n; i++) {
    console.log(`Produto ${i+1}:`);
    let nome = String(prompt("Nome: "));
    let precoCompra = Number(prompt("Preco de compra: "));
    let precoVenda = Number(prompt("Preco de venda: "));
    let lucro = ((precoVenda - precoCompra) / precoCompra) * 100;

    if(lucro < 10){
       lucroAbaixo10++; 
    }else if(lucro >= 10 && lucro <= 20){
        lucroEntre10e20++;
    }else{
        lucroAcima20++;
    }
    produtos.push({nome, precoCompra, precoVenda, lucro});
}


produtos.forEach(produto => {
    valorTotaldeCompra += produto.precoCompra;
    valorTotaldeVenda += produto.precoVenda;
    lucroTotal += produto.precoVenda - produto.precoCompra;
})
console.log("\n");
console.log("RELATORIO:");
console.log(`Lucro abaixo de 10%: ${lucroAbaixo10}`);
console.log(`Lucro entre 10% e 20%: ${lucroEntre10e20}`);
console.log(`Lucro acima de 20%: ${lucroAcima20}`);
console.log(`Valor total de compra: ${valorTotaldeCompra.toFixed(2)}`);
console.log(`Valor total de venda: ${valorTotaldeVenda.toFixed(2)}`);
console.log(`Lucro total: ${lucroTotal.toFixed(2)}`);