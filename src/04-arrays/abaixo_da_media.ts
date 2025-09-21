import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos elementos vai ter o vetor? "));
let numeros: number[] = [];
let soma = 0;
let media = 0 

for (let i = 0; i < n; i++) {
  let x = Number(prompt("Digite um número: "));
  numeros.push(x);
}

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i] ?? 0; // Coalência nula 
}

media = soma / n;
console.log(`MEDIA DO VETOR = ${media.toFixed(3)}`);

console.log("ELEMENTOS ABAIXO DA MEDIA:");
for (let i = 0; i < numeros.length; i++) {
    if ((numeros[i] ?? 0) < media) {
        console.log((numeros[i] ?? 0).toFixed(1));
    }
}



