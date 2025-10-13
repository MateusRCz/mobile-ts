import promptSync from 'prompt-sync';
const prompt = promptSync();

// Leitura do valor
const n = parseInt(prompt("Digite o valor de N: "));

// Validação do limite
if (n < 0 || n > 15) {
  console.log("Valor inválido! N deve estar entre 0 e 15.");
} else {
  let fatorial = 1;
  for (let i = 1; i <= n; i++) {
    fatorial *= i;
  }
  console.log(`FATORIAL = ${fatorial}`);
}
