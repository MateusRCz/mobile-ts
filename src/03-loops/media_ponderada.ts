import promptSync from 'prompt-sync';
const prompt = promptSync();

// Leitura da quantidade de casos
const n = parseInt(prompt("Quantos casos voce vai digitar? "));

for (let i = 0; i < n; i++) {
  console.log("Digite tres numeros:");
  const entrada1 = prompt; // pode ser "6.5 4.3"
  const entrada2 = prompt; // pode ser "6.2"

  // Junta as duas entradas e converte para números
  const valores = (entrada1 + " " + entrada2).split(" ").map(Number);

  const [a, b, c] = valores;
  const media = (a * 2 + b * 3 + c * 5) / 10;

  console.log(`MEDIA = ${media.toFixed(1)}`);
}
