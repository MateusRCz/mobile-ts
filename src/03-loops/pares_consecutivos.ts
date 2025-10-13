import promptSync from 'prompt-sync';
const prompt = promptSync();

while (true) {
  const input = prompt("Digite um número inteiro: ");
  const x = parseInt(input);

  if (x === 0) break;

  let inicio = x % 2 === 0 ? x : x + 1;
  let soma = 0;

  for (let i = 0; i < 5; i++) {
    soma += inicio + (i * 2);
  }

  console.log(`SOMA = ${soma}`);
}
