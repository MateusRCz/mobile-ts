import promptSync from 'prompt-sync';
const prompt = promptSync();

// Leitura do valor
const x = parseInt(prompt("Digite o valor de X: "));

// Impressão dos ímpares de 1 até X
for (let i = 1; i <= x; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
