import promptSync from 'prompt-sync';
const prompt = promptSync();

// Entrada em uma única linha
const entrada = prompt("Digite dois numeros: ");
const [x, y] = entrada.split(" ").map(Number);

// Determina os limites inferior e superior
const menor = Math.min(x, y);
const maior = Math.max(x, y);

let soma = 0;

// Soma dos ímpares entre os dois (excluindo os próprios)
for (let i = menor + 1; i < maior; i++) {
  if (i % 2 !== 0) {
    soma += i;
  }
}

console.log(`SOMA DOS IMPARES = ${soma}`);
