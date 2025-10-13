import promptSync from 'prompt-sync';
const prompt = promptSync();

// Leitura da quantidade de casos
const n = parseInt(prompt("Quantos casos de teste serao digitados? "));

let total = 0;
let coelhos = 0;
let ratos = 0;
let sapos = 0;

for (let i = 0; i < n; i++) {
  const quantidade = parseInt(prompt("Quantidade de cobaias: "));
  const tipo = prompt("Tipo de cobaia: ").toUpperCase();

  total += quantidade;

  if (tipo === 'C') {
    coelhos += quantidade;
  } else if (tipo === 'R') {
    ratos += quantidade;
  } else if (tipo === 'S') {
    sapos += quantidade;
  }
}

// Cálculo dos percentuais
const percCoelhos = (coelhos / total) * 100;
const percRatos = (ratos / total) * 100;
const percSapos = (sapos / total) * 100;

// Saída formatada
console.log("\nRELATORIO FINAL:");
console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${percCoelhos.toFixed(2)}`);
console.log(`Percentual de ratos: ${percRatos.toFixed(2)}`);
console.log(`Percentual de sapos: ${percSapos.toFixed(2)}`);
