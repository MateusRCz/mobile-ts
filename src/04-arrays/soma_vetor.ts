import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));
const numeros = [];
let soma = 0;


for(let i = 0; i < n; i++){
    const x = Number(prompt("Digite um numero: "));
    numeros.push(x.toFixed(2));
    soma += x;
    
};

let media = soma / n;


console.log(`VALORES = ${numeros.join(", ")}`);
console.log(`SOMA = ${soma.toFixed(2)}`);
console.log(`MEDIA = ${media.toFixed(2)}`);


