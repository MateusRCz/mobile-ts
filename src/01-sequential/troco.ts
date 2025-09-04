import promptSync from "prompt-sync";
const prompt = promptSync();

const precUnitario = Number(prompt("Preço unitário do produto: "));
const qtdComprada = Number(prompt("Quantidade comprada: "));
const dinheiroRecebido = Number(prompt("Dinheiro recebido: "));

console.log(`TROCO = ${dinheiroRecebido - (precUnitario * qtdComprada)}`);