import promptSync from "prompt-sync";
const prompt = promptSync();

let n = Number(prompt("Quantas pessoas serao digitadas? "));
let pessoas: {genero: string, altura: number} [] = [];
 

for (let i = 0; i < n; i++) {
    let altura = Number(prompt(`Altura da ${i+1}a pessoa: `));
    let genero = String(prompt(`Genero da ${i+1}a pessoa: `));
    pessoas.push({genero, altura})
};

let alturas = pessoas.map(p => p.altura);
let menorAltura = Math.min(...alturas);
let maiorAltura = Math.max(...alturas);

let mulheres = pessoas.filter(p => p.genero === "F");
let somaAlturasMulheres = mulheres.reduce((acc, p) => acc + p.altura, 0);
let mediaAlturaMulheres = somaAlturasMulheres / mulheres.length;

let numHomens = pessoas.filter(p => p.genero === "M"). length;

console.log("\n");
console.log(`Menor altura = ${menorAltura}`);
console.log(`Maior altura = ${maiorAltura}`);
console.log(`Media das alturas das mulheres = ${mediaAlturaMulheres.toFixed(2)}`);
console.log(`Numero de homens = ${numHomens}`);