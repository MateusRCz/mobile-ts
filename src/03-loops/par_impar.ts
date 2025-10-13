import promptSync from 'prompt-sync';
const prompt = promptSync();

// Leitura da quantidade de números
const n = parseInt(prompt("Quantos numeros voce vai digitar? "));

for (let i = 0; i < n; i++) {
  const x = parseInt(prompt("Digite um numero: "));

  if (x === 0) {
    console.log("NULO");
  } else {
    const parOuImpar = x % 2 === 0 ? "PAR" : "IMPAR";
    const positivoOuNegativo = x > 0 ? "POSITIVO" : "NEGATIVO";
    console.log(`${parOuImpar} ${positivoOuNegativo}`);
  }
}
