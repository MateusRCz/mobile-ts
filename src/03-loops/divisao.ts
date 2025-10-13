import promptSync from 'prompt-sync';
const prompt = promptSync();

// Leitura da quantidade de casos
const n = parseInt(prompt("Quantos casos voce vai digitar? "));

for (let i = 0; i < n; i++) {
  const numerador = parseFloat(prompt("Entre com o numerador: "));
  const denominador = parseFloat(prompt("Entre com o denominador: "));

  if (denominador === 0) {
    console.log("DIVISAO IMPOSSIVEL");
  } else {
    const resultado = numerador / denominador;
    console.log(`DIVISAO = ${resultado.toFixed(2)}`);
  }
}
