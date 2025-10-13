import promptSync from 'prompt-sync';
const prompt = promptSync();

// Leitura da quantidade de números
const n = parseInt(prompt("Quantos numeros voce vai digitar? "));

let dentro = 0;
let fora = 0;

for (let i = 0; i < n; i++) {
  const x = parseInt(prompt("Digite um numero: "));
  if (x >= 10 && x <= 20) {
    dentro++;
  } else {
    fora++;
  }
}

console.log(`${dentro} DENTRO`);
console.log(`${fora} FORA`);
