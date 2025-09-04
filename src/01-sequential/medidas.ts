import promptSync from "prompt-sync";
const prompt = promptSync();

const A = Number(prompt("Digite a medida A: "));
const B = Number(prompt("Digite a medida B: "));
const C = Number(prompt("Digite a medida C: "));

const quadrado = A * A;
const triangulo = (A * B) / 2;
const trapezio = ((A + B) * C) / 2;

console.log(`AREA DO QUADRADO = ${quadrado.toFixed(4)}`);
console.log(`AREA DO TRIANGULO = ${triangulo.toFixed(4)}`);
console.log(`AREA DO TRAPEZIO = ${trapezio.toFixed(4)}`);
