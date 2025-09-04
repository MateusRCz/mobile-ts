import promptSync from "prompt-sync";
const prompt = promptSync();

const r = Number(prompt("Digite o valor do raio do circulo: "));

const pi = 3.14159;

const area = pi * (r * r);

console.log(`AREA = ${area.toFixed(3)}`);